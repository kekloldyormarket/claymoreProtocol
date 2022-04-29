"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionHistory = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const useTransactions_1 = require("../../hooks/useTransactions");
const react_3 = require("@strata-foundation/react");
const react_4 = require("react");
const moment_1 = __importDefault(require("moment"));
const numberWithCommas_1 = require("../../utils/numberWithCommas");
const wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
const bi_1 = require("react-icons/bi");
const TransactionHistory = ({ tokenBondingKey, }) => {
    const { info: tokenBonding, loading: loadingBonding } = (0, react_3.useTokenBonding)(tokenBondingKey);
    const { isOpen: mineOnly, onToggle } = (0, react_2.useDisclosure)();
    const { result: sellOnlyTokenBondingKey, error: keyError1 } = (0, react_3.useTokenBondingKey)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.targetMint, 1);
    if (keyError1) {
        console.error(keyError1);
    }
    const { info: sellOnlyTokenBonding, loading: sellOnlyLoading } = (0, react_3.useTokenBonding)(sellOnlyTokenBondingKey);
    const { publicKey } = (0, wallet_adapter_react_1.useWallet)();
    const address = (0, react_4.useMemo)(() => (mineOnly ? publicKey || undefined : tokenBondingKey), [publicKey, tokenBondingKey, mineOnly]);
    const { transactions, fetchMore, loadingInitial, fetchNew, loadingMore } = (0, useTransactions_1.useTransactions)({
        numTransactions: 5,
        address,
    });
    const baseMint = (0, react_3.useMint)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.baseMint);
    const targetMint = (0, react_3.useMint)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.targetMint);
    const data = (0, react_4.useMemo)(() => {
        return tokenBonding && !sellOnlyLoading
            ? transactions
                .map((transaction) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
                const reserveIdx = transaction.transaction.message.accountKeys
                    .map((k) => k.toBase58())
                    .indexOf(tokenBonding.baseStorage.toBase58());
                const sellOnlyReserveIdx = transaction.transaction.message.accountKeys
                    .map((k) => k.toBase58())
                    .indexOf((sellOnlyTokenBonding === null || sellOnlyTokenBonding === void 0 ? void 0 : sellOnlyTokenBonding.baseStorage.toBase58()) || "");
                const preReserves = (_c = (_b = (_a = transaction.meta) === null || _a === void 0 ? void 0 : _a.preTokenBalances) === null || _b === void 0 ? void 0 : _b.find((b) => b.accountIndex == reserveIdx &&
                    b.mint == tokenBonding.baseMint.toBase58())) === null || _c === void 0 ? void 0 : _c.uiTokenAmount.uiAmount;
                const postReserves = (_f = (_e = (_d = transaction.meta) === null || _d === void 0 ? void 0 : _d.postTokenBalances) === null || _e === void 0 ? void 0 : _e.find((b) => b.accountIndex == reserveIdx &&
                    b.mint == tokenBonding.baseMint.toBase58())) === null || _f === void 0 ? void 0 : _f.uiTokenAmount.uiAmount;
                const reserveChange = (postReserves || 0) - (preReserves || 0);
                const preToken = (_k = (_j = (_h = (_g = transaction.meta) === null || _g === void 0 ? void 0 : _g.preTokenBalances) === null || _h === void 0 ? void 0 : _h.filter((b) => b.mint == tokenBonding.targetMint.toBase58())) === null || _j === void 0 ? void 0 : _j.map((v) => v.uiTokenAmount.uiAmount)) === null || _k === void 0 ? void 0 : _k.reduce((v1, v2) => (v1 || 0) + (v2 || 0), 0);
                const postToken = (_p = (_o = (_m = (_l = transaction.meta) === null || _l === void 0 ? void 0 : _l.postTokenBalances) === null || _m === void 0 ? void 0 : _m.filter((b) => b.mint == tokenBonding.targetMint.toBase58())) === null || _o === void 0 ? void 0 : _o.map((v) => v.uiTokenAmount.uiAmount)) === null || _p === void 0 ? void 0 : _p.reduce((v1, v2) => (v1 || 0) + (v2 || 0), 0);
                const tokenChange = (postToken || 0) - (preToken || 0);
                const preSellOnlyReserves = (_s = (_r = (_q = transaction.meta) === null || _q === void 0 ? void 0 : _q.preTokenBalances) === null || _r === void 0 ? void 0 : _r.find((b) => b.accountIndex == sellOnlyReserveIdx &&
                    b.mint == (sellOnlyTokenBonding === null || sellOnlyTokenBonding === void 0 ? void 0 : sellOnlyTokenBonding.baseMint.toBase58()))) === null || _s === void 0 ? void 0 : _s.uiTokenAmount.uiAmount;
                const postSellOnlyReserves = (_v = (_u = (_t = transaction.meta) === null || _t === void 0 ? void 0 : _t.postTokenBalances) === null || _u === void 0 ? void 0 : _u.find((b) => b.accountIndex == sellOnlyReserveIdx &&
                    b.mint == (sellOnlyTokenBonding === null || sellOnlyTokenBonding === void 0 ? void 0 : sellOnlyTokenBonding.baseMint.toBase58()))) === null || _v === void 0 ? void 0 : _v.uiTokenAmount.uiAmount;
                const sellOnlyChange = (preSellOnlyReserves || 0) - (postSellOnlyReserves || 0);
                return {
                    price: reserveChange / Math.max(tokenChange, sellOnlyChange),
                    volume: Math.max(tokenChange, sellOnlyChange),
                    time: (transaction.blockTime || 0) * 1000,
                    signature: transaction.transaction.signatures[0],
                };
            })
                .filter((d) => d.price)
            : [];
    }, [transactions, tokenBonding, sellOnlyLoading, sellOnlyTokenBonding]);
    const icoColor = (0, react_2.useColorModeValue)("black", "white");
    const thProps = {
        textTransform: "none",
        color: "white",
        fontSize: "14px",
        letterSpacing: "none",
        padding: 4,
    };
    return (react_1.default.createElement(react_2.VStack, { spacing: 4, w: "full", align: "left" },
        react_1.default.createElement(react_2.HStack, { justify: "space-between" },
            react_1.default.createElement(react_2.Text, { fontSize: "18px", fontWeight: "700" }, "Recent Transactions"),
            react_1.default.createElement(react_2.HStack, { spacing: 1 },
                publicKey && (react_1.default.createElement(react_2.Switch, { size: "sm", onChange: () => onToggle() }, "Mine Only")),
                react_1.default.createElement(react_2.IconButton, { "aria-label": "Fetch New Transactions", title: "Fetch New Transactions", onClick: () => fetchNew(20), isLoading: loadingMore, color: icoColor, variant: "link", icon: react_1.default.createElement(react_2.Icon, { h: "24px", w: "24px", mb: "-2px", as: bi_1.BiRefresh }) }))),
        react_1.default.createElement(react_2.TableContainer, null,
            react_1.default.createElement(react_2.Table, { variant: "simple" },
                react_1.default.createElement(react_2.Thead, { variant: "unstyled" },
                    react_1.default.createElement(react_2.Tr, null,
                        react_1.default.createElement(react_2.Th, Object.assign({}, thProps), "Volume"),
                        react_1.default.createElement(react_2.Th, Object.assign({}, thProps), "Price"),
                        react_1.default.createElement(react_2.Th, Object.assign({}, thProps), "Time"))),
                data.map(({ price, volume, time, signature }) => {
                    return (react_1.default.createElement(react_2.Tr, { onClick: () => window.open(`https://explorer.solana.com/tx/${signature}`, "_blank"), _hover: { background: "#303947", cursor: "pointer" }, key: signature },
                        react_1.default.createElement(react_2.Td, null, (0, numberWithCommas_1.numberWithCommas)(volume, targetMint === null || targetMint === void 0 ? void 0 : targetMint.decimals)),
                        react_1.default.createElement(react_2.Td, null, (0, numberWithCommas_1.numberWithCommas)(price, baseMint === null || baseMint === void 0 ? void 0 : baseMint.decimals)),
                        react_1.default.createElement(react_2.Td, { title: (0, moment_1.default)(time).format("llll") }, (0, moment_1.default)(time).fromNow())));
                }))),
        loadingInitial && (react_1.default.createElement(react_2.Box, { w: "100%" },
            react_1.default.createElement(react_2.Center, null,
                react_1.default.createElement(react_2.Spinner, null)))),
        react_1.default.createElement(react_2.Button, { color: "gray.500", variant: "ghost", onClick: () => fetchMore(20) }, "Show More")));
};
exports.TransactionHistory = TransactionHistory;
//# sourceMappingURL=TransactionHistory.js.map