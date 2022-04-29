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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBounties = void 0;
const marketplaceSdkContext_1 = require("../contexts/marketplaceSdkContext");
const react_async_hook_1 = require("react-async-hook");
const fuse_js_1 = __importDefault(require("fuse.js"));
const react_1 = require("react");
const react_2 = require("@strata-foundation/react");
const mpl_token_metadata_1 = require("@metaplex-foundation/mpl-token-metadata");
const spl_utils_1 = require("@strata-foundation/spl-utils");
const react_3 = require("react");
function getBounties(marketplaceSdk, baseMint) {
    return __awaiter(this, void 0, void 0, function* () {
        if (marketplaceSdk) {
            return marketplaceSdk.getBounties({ baseMint });
        }
    });
}
function enrich(shouldEnrich, bountyItems, tokenMetadataSdk) {
    return __awaiter(this, void 0, void 0, function* () {
        if (shouldEnrich) {
            return Promise.all(bountyItems.map((bounty) => __awaiter(this, void 0, void 0, function* () {
                const tokenMetadata = (yield (tokenMetadataSdk === null || tokenMetadataSdk === void 0 ? void 0 : tokenMetadataSdk.getMetadata(yield mpl_token_metadata_1.Metadata.getPDA(bounty.targetMint)))) || undefined;
                const data = yield spl_utils_1.SplTokenMetadata.getArweaveMetadata(tokenMetadata === null || tokenMetadata === void 0 ? void 0 : tokenMetadata.data.uri);
                return Object.assign(Object.assign({}, bounty), { tokenMetadata,
                    data, attributes: spl_utils_1.SplTokenMetadata.attributesToRecord(data === null || data === void 0 ? void 0 : data.attributes) });
            })));
        }
        return bountyItems;
    });
}
const BATCH_SIZE = 20;
const LIMIT = 20;
// Enrich batch size at a time with token metadata. This
// keeps us from hitting metadata for every single bounty, only
// the ones we may need. Batch fetches up to limit results returned
function useEnriched(search, bountyItems, tokenMetadataSdk, batchSize = BATCH_SIZE, limit = LIMIT) {
    if (batchSize > limit) {
        batchSize = limit;
    }
    const [enriched, setEnriched] = (0, react_1.useState)([]);
    const flat = (0, react_1.useMemo)(() => enriched.flat(), [enriched]);
    (0, react_3.useEffect)(() => {
        (() => __awaiter(this, void 0, void 0, function* () {
            if (bountyItems) {
                const batched = (0, spl_utils_1.chunks)(bountyItems, batchSize);
                for (const [index, batch] of batched.entries()) {
                    let nextSet = (yield enrich(true, batch, tokenMetadataSdk)).filter(i => { var _a; return (_a = i.attributes) === null || _a === void 0 ? void 0 : _a.is_strata_bounty; });
                    if (search) {
                        nextSet = new fuse_js_1.default(nextSet, {
                            keys: ["tokenMetadata.data.name", "tokenMetadata.data.symbol"],
                            threshold: 0.2,
                        })
                            .search(search)
                            .map((result) => result.item);
                    }
                    setEnriched((e) => {
                        e[index] = nextSet;
                        return [...e];
                    });
                    if (enriched.flat().length + nextSet.length > limit) {
                        break;
                    }
                }
            }
        }))().catch(console.error);
    }, [bountyItems, batchSize, search, tokenMetadataSdk, limit]);
    if (!bountyItems || !tokenMetadataSdk) {
        return undefined;
    }
    return flat;
}
function useBounties({ search, baseMint, sortType = "GO_LIVE", sortDirection = "DESC", limit = LIMIT, }) {
    const { tokenMetadataSdk } = (0, react_2.useStrataSdks)();
    const { marketplaceSdk } = (0, marketplaceSdkContext_1.useMarketplaceSdk)();
    const _a = (0, react_async_hook_1.useAsync)(getBounties, [
        marketplaceSdk,
        baseMint,
    ]), { result: bounties } = _a, rest = __rest(_a, ["result"]);
    const sorted = (0, react_1.useMemo)(() => {
        if (bounties) {
            return [...bounties.sort((a, b) => {
                    const sortField = sortType === "GO_LIVE"
                        ? (thing) => thing.goLiveUnixTime.toNumber()
                        : (thing) => thing.reserveBalanceFromBonding.toNumber();
                    return sortDirection === "DESC"
                        ? sortField(b) - sortField(a)
                        : sortField(a) - sortField(b);
                })];
        }
        return [];
    }, [bounties, sortType, sortDirection]);
    const enriched = useEnriched(search, sorted, tokenMetadataSdk, BATCH_SIZE, limit);
    return Object.assign(Object.assign({}, rest), { result: enriched });
}
exports.useBounties = useBounties;
//# sourceMappingURL=useBounties.js.map