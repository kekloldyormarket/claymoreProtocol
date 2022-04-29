"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BountyCard = void 0;
const react_1 = require("@chakra-ui/react");
const react_2 = require("@strata-foundation/react");
const moment_1 = __importDefault(require("moment"));
const react_3 = __importDefault(require("react"));
const AuthorityAndTokenInfo_1 = require("./AuthorityAndTokenInfo");
const BountyCardContribution_1 = require("./BountyCardContribution");
const BountyCard = ({ mintKey, onClick, }) => {
    const { image, displayName, loading } = (0, react_2.useTokenMetadata)(mintKey);
    const { info: tokenBonding, loading: bondingLoading } = (0, react_2.useTokenBondingFromMint)(mintKey);
    const { metadata } = (0, react_2.useTokenMetadata)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.baseMint);
    const reserveAmount = (0, react_2.useReserveAmount)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.publicKey);
    return (react_3.default.createElement(react_1.HStack, { w: "full", onClick: () => onClick(), align: "flex-start", spacing: 4, _hover: {
            backgroundColor: "gray.100",
            cursor: "pointer",
            textDecoration: "none",
        }, padding: 8 },
        !loading && react_3.default.createElement(react_1.Image, { w: "45px", h: "45px", src: image, alt: displayName }),
        loading && react_3.default.createElement(react_1.Skeleton, { w: "45px", h: "45px" }),
        react_3.default.createElement(react_1.SimpleGrid, { columns: [1, 2], gap: 4, w: "full" },
            react_3.default.createElement(react_1.VStack, { maxWidth: "500px", spacing: 4, align: "left" },
                !loading && displayName && (react_3.default.createElement(react_1.Heading, { fontSize: "20px", size: "md" }, displayName)),
                loading && (react_3.default.createElement(react_1.VStack, { w: "full", align: "left" },
                    react_3.default.createElement(react_1.Skeleton, { width: "full", height: "20px" }),
                    react_3.default.createElement(react_1.Skeleton, { width: "50%", height: "20px" }))),
                react_3.default.createElement(AuthorityAndTokenInfo_1.AuthorityAndTokenInfo, { mintKey: mintKey }),
                !bondingLoading && tokenBonding && (react_3.default.createElement(react_1.Text, { color: "gray.400" },
                    "Created",
                    " ",
                    (0, moment_1.default)(tokenBonding.goLiveUnixTime.toNumber() * 1000).fromNow())),
                bondingLoading && react_3.default.createElement(react_1.Skeleton, { w: "80px" })),
            react_3.default.createElement(react_1.Box, { justifySelf: [null, "flex-end"], alignSelf: "center", alignContent: "left" },
                react_3.default.createElement(BountyCardContribution_1.BountyCardContribution, { amount: reserveAmount, symbol: metadata === null || metadata === void 0 ? void 0 : metadata.data.symbol })))));
};
exports.BountyCard = BountyCard;
//# sourceMappingURL=BountyCard.js.map