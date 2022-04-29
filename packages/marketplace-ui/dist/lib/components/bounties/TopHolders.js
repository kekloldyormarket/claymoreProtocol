"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopHolders = void 0;
const react_1 = require("@chakra-ui/react");
const wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
const react_2 = require("@strata-foundation/react");
const spl_token_bonding_1 = require("@strata-foundation/spl-token-bonding");
const react_3 = __importDefault(require("react"));
const react_async_hook_1 = require("react-async-hook");
const numberWithCommas_1 = require("../../utils/numberWithCommas");
const onCreatorClick = (c, t, tokenRef, handle) => {
    window.open(tokenRef
        ? `https://wum.bo/app/profile/view/${tokenRef.mint.toBase58()}`
        : handle
            ? `https://twitter.com/${handle}`
            : `https://explorer.solana.com/address/${c.toBase58()}`, "_blank");
};
function getLargestTokenAccounts(connection, mint) {
    return __awaiter(this, void 0, void 0, function* () {
        if (mint) {
            const accounts = (yield connection.getTokenLargestAccounts(mint)).value;
            return accounts
                .filter((a) => a.uiAmount)
                .map((account) => ({
                publicKey: account.address,
                amount: account.uiAmount,
            }));
        }
        return [];
    });
}
const TopHolders = ({ mintKey }) => {
    const { connection } = (0, wallet_adapter_react_1.useConnection)();
    const { result: accounts, loading } = (0, react_async_hook_1.useAsync)(getLargestTokenAccounts, [
        connection,
        mintKey,
    ]);
    if (loading) {
        return react_3.default.createElement(react_1.Spinner, null);
    }
    return (react_3.default.createElement(react_1.VStack, { w: "full", spacing: 2, divider: react_3.default.createElement(react_1.StackDivider, { borderColor: "gray.200" }) }, accounts === null || accounts === void 0 ? void 0 : accounts.map((account, index) => (react_3.default.createElement(LeaderboardItem, Object.assign({ rank: index + 1, key: account.publicKey.toBase58() }, account))))));
};
exports.TopHolders = TopHolders;
const LeaderboardItem = ({ publicKey, rank, }) => {
    const { info: account, loading } = (0, react_2.useTokenAccount)(publicKey);
    const mint = (0, react_2.useMint)(account === null || account === void 0 ? void 0 : account.mint);
    if (loading || !account) {
        return react_3.default.createElement(react_1.Spinner, null);
    }
    return (react_3.default.createElement(react_1.HStack, { align: "center", w: "full", padding: 2, justify: "space-between" },
        react_3.default.createElement(react_1.HStack, { align: "center", spacing: 8 },
            react_3.default.createElement(react_1.Text, { fontWeight: 500, color: "gray.500" }, rank),
            react_3.default.createElement(react_2.Creator, { creator: account.owner, onClick: onCreatorClick })),
        react_3.default.createElement(react_1.Text, { fontWeight: 700, color: "gray.600", marginLeft: "auto" }, mint &&
            (0, numberWithCommas_1.numberWithCommas)((0, react_2.roundToDecimals)((0, spl_token_bonding_1.toNumber)(account.amount, mint), mint.decimals)))));
};
//# sourceMappingURL=TopHolders.js.map