"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsBountyAdmin = void 0;
const react_1 = require("@strata-foundation/react");
function useIsBountyAdmin(wallet, tokenBondingKey) {
    var _a, _b;
    const { info: tokenBonding, loading: bondingLoading } = (0, react_1.useTokenBonding)(tokenBondingKey);
    const { info: governance, loading: governanceLoading } = (0, react_1.useGovernance)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.reserveAuthority);
    const { metadata: targetMetadata, loading: targetMetaLoading, } = (0, react_1.useTokenMetadata)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.targetMint);
    const { info: tokenRef, loading: tokenRefLoading } = (0, react_1.useTokenRef)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.reserveAuthority);
    // Was an unclaimed social token that was the authority over this
    const isTokenRefAuthority = tokenRef && wallet && ((_a = tokenRef.authority) === null || _a === void 0 ? void 0 : _a.equals(wallet));
    return {
        loading: targetMetaLoading ||
            bondingLoading ||
            governanceLoading ||
            tokenRefLoading,
        isAdmin: Boolean((wallet &&
            ((_b = tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.reserveAuthority) === null || _b === void 0 ? void 0 : _b.equals(wallet))) ||
            governance ||
            isTokenRefAuthority),
        isEditor: Boolean((targetMetadata === null || targetMetadata === void 0 ? void 0 : targetMetadata.updateAuthority) &&
            targetMetadata.updateAuthority == (wallet === null || wallet === void 0 ? void 0 : wallet.toBase58())),
    };
}
exports.useIsBountyAdmin = useIsBountyAdmin;
//# sourceMappingURL=useIsBountyAdmin.js.map