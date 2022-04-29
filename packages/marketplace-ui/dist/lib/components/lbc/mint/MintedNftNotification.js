"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MintedNftNotification = void 0;
const react_1 = require("@chakra-ui/react");
const react_2 = require("@strata-foundation/react");
const react_3 = __importDefault(require("react"));
const MintedNftNotification = ({ onDismiss, mint, }) => {
    const { metadata, image, loading } = (0, react_2.useTokenMetadata)(mint);
    return (react_3.default.createElement(react_1.Alert, { w: "full", bgColor: "black.300", borderTop: "1px", borderTopColor: "gray.600", rounded: "lg", fontFamily: "body", color: "white", status: "success", flexDirection: "column", p: 0 },
        react_3.default.createElement(react_1.Box, { w: "full" },
            (loading || !image) && react_3.default.createElement(react_1.Skeleton, { w: "full", h: "327px" }),
            !loading && image && (react_3.default.createElement(react_1.Image, { objectFit: "cover", alt: metadata === null || metadata === void 0 ? void 0 : metadata.data.name, w: "full", minH: "327px", src: image }))),
        react_3.default.createElement(react_1.VStack, { align: "left", w: "full", p: 8, spacing: 1 },
            react_3.default.createElement(react_1.HStack, { align: "left", spacing: 1 },
                react_3.default.createElement(react_1.AlertTitle, { fontSize: "24px", fontWeight: 700 }, "Success!"),
                react_3.default.createElement(react_1.AlertIcon, null)),
            react_3.default.createElement(react_1.Text, { color: "gray.400" }, loading
                ? "Waiting on your preview..."
                : `Here is a preview of your NFT: ${metadata ? metadata.data.name : ""}`)),
        react_3.default.createElement(react_1.CloseButton, { position: "absolute", right: "8px", top: "8px", color: "gray.400", _hover: { color: "gray.600", cursor: "pointer" }, onClick: onDismiss })));
};
exports.MintedNftNotification = MintedNftNotification;
//# sourceMappingURL=MintedNftNotification.js.map