"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BountyDetail = void 0;
const react_1 = require("@chakra-ui/react");
const wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
const react_2 = require("@strata-foundation/react");
const moment_1 = __importDefault(require("moment"));
const react_3 = __importStar(require("react"));
const ri_1 = require("react-icons/ri");
const useBountyInfo_1 = require("../../hooks/useBountyInfo");
const useIsBountyAdmin_1 = require("../../hooks/useIsBountyAdmin");
const AuthorityAndTokenInfo_1 = require("./AuthorityAndTokenInfo");
const BountyCardContribution_1 = require("./BountyCardContribution");
const BountyContribute_1 = require("./BountyContribute");
const DisburseFunds_1 = require("../DisburseFunds");
const TopHolders_1 = require("./TopHolders");
const BountyDetail = ({ name, description, image, mintKey, onEdit, onBuyMore }) => {
    const { info: tokenBonding, loading: bondingLoading } = (0, react_2.useTokenBondingFromMint)(mintKey);
    const { publicKey } = (0, wallet_adapter_react_1.useWallet)();
    const { pricing } = (0, react_2.useBondingPricing)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.publicKey);
    const targetBalance = (0, react_2.useOwnedAmount)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.targetMint);
    const reserveAmount = (0, react_2.useReserveAmount)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.publicKey);
    const [topHolderKey, setTopHolderKey] = (0, react_3.useState)(0);
    const refreshTopHolders = () => setTopHolderKey((k) => k + 1);
    const { isAdmin, isEditor } = (0, useIsBountyAdmin_1.useIsBountyAdmin)(publicKey || undefined, tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.publicKey);
    const { info: { name: fromChainName, image: targetImage, createdAt, description: fromChainDescription, fundsHaveBeenUsed, bountyClosed, attributes, isNormalBounty, }, loading, } = (0, useBountyInfo_1.useBountyInfo)(mintKey);
    name = fromChainName || name;
    image = targetImage || image;
    description = fromChainDescription || description;
    const dataMissing = (0, react_3.useMemo)(() => !name && !image && !description, [name, image, description]);
    const { metadata: baseMetadata } = (0, react_2.useTokenMetadata)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.baseMint);
    if ((!loading && dataMissing) ||
        (attributes && !attributes.is_strata_bounty)) {
        return (react_3.default.createElement(react_1.Center, { height: "300px" },
            react_3.default.createElement(react_1.Text, null,
                react_3.default.createElement("b", null, "404: "),
                " Not found")));
    }
    if (dataMissing) {
        return react_3.default.createElement(react_1.Spinner, null);
    }
    return (react_3.default.createElement(react_1.VStack, { spacing: 2, w: "full" },
        isEditor && (react_3.default.createElement(react_1.Button, { color: "gray.400", 
            // __hover={{ rounded: "lg", borderColor: "gray.200", backgroundColor: "gray.100" }}
            leftIcon: react_3.default.createElement(react_1.Icon, { as: ri_1.RiPencilFill, mr: "-1px" }), variant: "ghost", marginLeft: "auto", onClick: () => onEdit && onEdit() }, "Edit")),
        react_3.default.createElement(react_1.VStack, { w: "full", p: 6, pt: isEditor ? 0 : 8, spacing: 8 },
            react_3.default.createElement(react_1.VStack, { spacing: 4 },
                react_3.default.createElement(react_1.Heading, { textAlign: "center" }, name),
                react_3.default.createElement(AuthorityAndTokenInfo_1.AuthorityAndTokenInfo, { mintKey: mintKey }),
                tokenBonding && (react_3.default.createElement(react_1.Text, { fontSize: "15px", color: "gray.400" },
                    "Created ",
                    (0, moment_1.default)(createdAt).fromNow()))),
            react_3.default.createElement(react_1.Text, { w: "full", align: "left", fontSize: "15px", color: "gray.500", whiteSpace: "pre-line" },
                description,
                "\n",
                (attributes === null || attributes === void 0 ? void 0 : attributes.discussion) && `Discussion: ${attributes.discussion}\n`,
                (attributes === null || attributes === void 0 ? void 0 : attributes.contact) && `Contact: ${attributes.contact}`),
            fundsHaveBeenUsed && (react_3.default.createElement(react_1.Alert, { status: "error" }, "Funds have been disbursed from this bounty without closing it. Existing contributors may not be able to withdraw what they put into the bounty. Contact the bounty authority if you have any questions")),
            !isNormalBounty && (react_3.default.createElement(react_1.Alert, { status: "warning" }, "This bounty does not have normal bonding curve parameters. It may have royalties set, or be using a non fixed price curve. Buyer beware.")),
            bountyClosed && (react_3.default.createElement(react_3.default.Fragment, null,
                react_3.default.createElement(react_1.Alert, { status: "info" }, "This bounty has been closed."),
                react_3.default.createElement(react_1.Divider, { color: "gray.200" }),
                react_3.default.createElement(react_1.Heading, { mb: "-6px", alignSelf: "flex-start", size: "sm" }, "Top Contributors"),
                react_3.default.createElement(TopHolders_1.TopHolders, { key: topHolderKey, mintKey: mintKey }))),
            !bountyClosed && (react_3.default.createElement(react_3.default.Fragment, null,
                react_3.default.createElement(react_1.SimpleGrid, { w: "full", justifyContent: "stretch", columns: [1, 1, 2], spacing: 2, gap: 2 },
                    react_3.default.createElement(BountyCardContribution_1.BountyCardContribution, { amount: reserveAmount, symbol: baseMetadata === null || baseMetadata === void 0 ? void 0 : baseMetadata.data.symbol }),
                    react_3.default.createElement(BountyCardContribution_1.BountyCardContribution, { amount: typeof targetBalance === "undefined"
                            ? undefined
                            : pricing === null || pricing === void 0 ? void 0 : pricing.sellTargetAmount(targetBalance), symbol: baseMetadata === null || baseMetadata === void 0 ? void 0 : baseMetadata.data.symbol, text: "My Contributions" })),
                react_3.default.createElement(react_1.VStack, { align: "flex-end", w: "full" },
                    react_3.default.createElement(BountyContribute_1.BountyContribute, { onBuyMore: onBuyMore, mintKey: mintKey, onContributeSuccess: refreshTopHolders })),
                react_3.default.createElement(react_1.Divider, { color: "gray.200" }),
                react_3.default.createElement(react_1.Heading, { mb: "-6px", alignSelf: "flex-start", size: "sm" }, "Top Contributors"),
                react_3.default.createElement(TopHolders_1.TopHolders, { key: topHolderKey, mintKey: mintKey }),
                isAdmin && tokenBonding && (react_3.default.createElement(react_1.VStack, { w: "full", spacing: 2 },
                    react_3.default.createElement(react_1.Divider, { color: "gray.200" }),
                    react_3.default.createElement(react_1.Heading, { alignSelf: "flex-start", size: "sm" }, "Disburse Funds"),
                    react_3.default.createElement(DisburseFunds_1.DisburseFunds, { tokenBondingKey: tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.publicKey }))))))));
};
exports.BountyDetail = BountyDetail;
//# sourceMappingURL=BountyDetail.js.map