"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBountyInfo = void 0;
const marketplace_sdk_1 = require("@strata-foundation/marketplace-sdk");
const react_1 = require("@strata-foundation/react");
const spl_token_bonding_1 = require("@strata-foundation/spl-token-bonding");
const spl_utils_1 = require("@strata-foundation/spl-utils");
const use_debounced_memo_1 = __importDefault(require("@sevenoutman/use-debounced-memo"));
const react_2 = __importDefault(require("react"));
function useBountyInfo(mintKey) {
    const { info: tokenBonding, loading: bondingLoading } = (0, react_1.useTokenBondingFromMint)(mintKey);
    const { data: targetData, metadata, loading: targetMetaLoading, image, displayName } = (0, react_1.useTokenMetadata)(mintKey);
    const reserveAmount = (0, react_1.useReserveAmount)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.publicKey);
    const baseMint = (0, react_1.useMint)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.baseMint);
    // Debounce because this can cause it to flash a notification when reserves change at the
    // same time as bonding, but one comes through before the other.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fundsHaveBeenUsed = (0, use_debounced_memo_1.default)(() => tokenBonding &&
        baseMint &&
        reserveAmount &&
        (0, spl_token_bonding_1.toNumber)(tokenBonding.reserveBalanceFromBonding, baseMint) !==
            reserveAmount, [tokenBonding, baseMint, reserveAmount], 500);
    const bountyClosed = (0, use_debounced_memo_1.default)(() => Boolean(mintKey && !tokenBonding && !bondingLoading && metadata), [mintKey, tokenBonding, bondingLoading, metadata], 500);
    const attributes = react_2.default.useMemo(() => spl_utils_1.SplTokenMetadata.attributesToRecord(targetData === null || targetData === void 0 ? void 0 : targetData.attributes), [targetData]);
    return {
        info: {
            name: displayName,
            image,
            createdAt: tokenBonding && new Date(tokenBonding.goLiveUnixTime.toNumber() * 1000),
            description: targetData === null || targetData === void 0 ? void 0 : targetData.description,
            fundsHaveBeenUsed,
            bountyClosed,
            contributed: reserveAmount,
            attributes,
            isNormalBounty: marketplace_sdk_1.MarketplaceSdk.isNormalBounty(tokenBonding),
        },
        loading: bondingLoading || targetMetaLoading,
    };
}
exports.useBountyInfo = useBountyInfo;
//# sourceMappingURL=useBountyInfo.js.map