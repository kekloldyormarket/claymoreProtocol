"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenDisplay = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@strata-foundation/react");
function TokenDisplay({ tokenRef: tokenRefKey, tokenBonding: tokenBondingKey }) {
    const { info: tokenRef, loading } = (0, react_2.useTokenRef)(tokenRefKey);
    const { info: tokenBonding, loading: loadingTokenBonding } = (0, react_2.useTokenBonding)(tokenBondingKey);
    const { image, metadata, loading: metaLoading } = (0, react_2.useTokenMetadata)(tokenRef && tokenRef.mint);
    const { pricing, loading: loadingPricing } = (0, react_2.useBondingPricing)(tokenBondingKey);
    if (loading || metaLoading || loadingPricing || loadingTokenBonding) {
        return react_1.default.createElement("div", null, "Loading...");
    }
    return react_1.default.createElement("div", null,
        react_1.default.createElement("img", { src: image }),
        metadata && react_1.default.createElement("div", null,
            react_1.default.createElement("div", null,
                react_1.default.createElement("b", null, metadata.data.name)),
            react_1.default.createElement("div", null, metadata.data.symbol)),
        pricing && react_1.default.createElement("div", null,
            react_1.default.createElement("div", null,
                "Current Price: ",
                pricing.current()),
            react_1.default.createElement("div", null,
                "Value Locked: ",
                pricing.locked())));
}
exports.TokenDisplay = TokenDisplay;
//# sourceMappingURL=TokenDisplay.js.map