"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorityAndTokenInfo = exports.InfoItem = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const react_3 = require("@strata-foundation/react");
const onCreatorClick = (c, t, tokenRef, handle) => {
    window.open(tokenRef
        ? `https://wum.bo/app/profile/view/${tokenRef.mint}`
        : handle
            ? `https://twitter.com/${handle}`
            : `https://explorer.solana.com/address/${c.toBase58()}`, "_blank");
};
const InfoItem = ({ name, creator, loading }) => {
    return (react_1.default.createElement(react_2.HStack, { spacing: 2 },
        react_1.default.createElement(react_2.Text, { fontWeight: 800, color: "gray.700" },
            name,
            ":",
            " "),
        " ",
        loading ? (react_1.default.createElement(react_2.Spinner, { size: "xs" })) : creator ? (react_1.default.createElement(react_3.Creator, { creator: creator, onClick: onCreatorClick })) : "None"));
};
exports.InfoItem = InfoItem;
const AuthorityAndTokenInfo = ({ mintKey }) => {
    const { info: tokenBonding, loading } = (0, react_3.useTokenBondingFromMint)(mintKey);
    const { metadata, loading: loadingMeta } = (0, react_3.useTokenMetadata)(mintKey);
    const updateAuthority = (0, react_3.usePublicKey)(metadata === null || metadata === void 0 ? void 0 : metadata.updateAuthority);
    return (react_1.default.createElement(react_2.HStack, { justify: "center", gap: 1, flexWrap: "wrap", fontSize: "14px", spacing: 4 },
        react_1.default.createElement(exports.InfoItem, { creator: updateAuthority, loading: loading, name: "Requester" }),
        react_1.default.createElement(exports.InfoItem, { creator: tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.reserveAuthority, loading: loading, name: "Approver" })));
};
exports.AuthorityAndTokenInfo = AuthorityAndTokenInfo;
//# sourceMappingURL=AuthorityAndTokenInfo.js.map