"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleItemAdmin = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const react_3 = require("@strata-foundation/react");
const spl_token_bonding_1 = require("@strata-foundation/spl-token-bonding");
const AsyncButton_1 = require("../AsyncButton");
const SaleItemAdmin = ({ tokenBondingKey, }) => {
    const { tokenBondingSdk } = (0, react_3.useStrataSdks)();
    const { info: tokenBonding, loading: bondingLoading } = (0, react_3.useTokenBonding)(tokenBondingKey);
    const account = (0, react_3.useTokenAccount)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.baseStorage);
    const mint = (0, react_3.useMint)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.baseMint);
    const { metadata, loading: metadataLoading } = (0, react_3.useTokenMetadata)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.baseMint);
    const amount = (account === null || account === void 0 ? void 0 : account.info) && mint && (0, spl_token_bonding_1.toNumber)(account.info.amount, mint);
    return (react_1.default.createElement(react_2.HStack, { spacing: 2, borderBottom: 1, borderBottomColor: "gray.300" },
        react_1.default.createElement(AsyncButton_1.AsyncButton, { w: "full", variant: "outline", colorScheme: "primary", isDisabled: !tokenBondingSdk || !amount, action: () => tokenBondingSdk.transferReserves({
                tokenBonding: tokenBondingKey,
                amount: amount,
            }) },
            "Collect",
            " ",
            account &&
                !(bondingLoading || metadataLoading) &&
                `${amount === null || amount === void 0 ? void 0 : amount.toFixed(2)} ${metadata === null || metadata === void 0 ? void 0 : metadata.data.symbol}`),
        react_1.default.createElement(AsyncButton_1.AsyncButton, { w: "full", colorScheme: "red", isDisabled: !tokenBondingSdk || amount != 0, title: amount != 0
                ? "Must have no remaning balance to close, run collect first"
                : undefined, action: () => tokenBondingSdk.close({
                tokenBonding: tokenBondingKey,
            }) }, "Delete Listing")));
};
exports.SaleItemAdmin = SaleItemAdmin;
//# sourceMappingURL=SaleItemAdmin.js.map