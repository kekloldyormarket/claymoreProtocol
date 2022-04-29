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
exports.SaleItem = void 0;
const react_1 = require("@chakra-ui/react");
const wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
const react_2 = require("@strata-foundation/react");
const react_3 = __importStar(require("react"));
const react_async_hook_1 = require("react-async-hook");
const react_hot_toast_1 = __importDefault(require("react-hot-toast"));
const SaleItemAdmin_1 = require("./SaleItemAdmin");
const fi_1 = require("react-icons/fi");
const QuantityPicker_1 = require("./QuantityPicker");
function buy(tokenBondingSdk, tokenBonding, quantity) {
    return __awaiter(this, void 0, void 0, function* () {
        yield tokenBondingSdk.buy({
            tokenBonding,
            desiredTargetAmount: quantity,
            slippage: 0.05,
        });
        react_hot_toast_1.default.custom((t) => (react_3.default.createElement(react_2.Notification, { show: t.visible, type: "success", heading: "Transactoin Successful", message: `Successfully purchased ${quantity}`, onDismiss: () => react_hot_toast_1.default.dismiss(t.id) })));
    });
}
const SaleItem = ({ mintKey, name, description, image, }) => {
    var _a, _b;
    const { info: tokenBonding, loading: bondingLoading } = (0, react_2.useTokenBondingFromMint)(mintKey);
    const { connected, publicKey } = (0, wallet_adapter_react_1.useWallet)();
    const targetMint = (0, react_2.useMint)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.targetMint);
    const { image: targetImage, metadata: targetMetadata, data: targetData, loading: targetMetaLoading, } = (0, react_2.useTokenMetadata)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.targetMint);
    const { metadata: baseMetadata, loading: metadataLoading } = (0, react_2.useTokenMetadata)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.baseMint);
    const { pricing, loading: pricingLoading } = (0, react_2.useBondingPricing)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.publicKey);
    const { tokenBondingSdk } = (0, react_2.useStrataSdks)();
    const [qty, setQty] = (0, react_3.useState)(1);
    const { execute, loading, error } = (0, react_async_hook_1.useAsyncCallback)(buy);
    const { awaitingApproval } = (0, react_2.useProvider)();
    const qtyNumber = Number(qty);
    const mintCapNumber = (_a = tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.mintCap) === null || _a === void 0 ? void 0 : _a.toNumber();
    const targetSupplyNumber = targetMint === null || targetMint === void 0 ? void 0 : targetMint.supply.toNumber();
    const balance = (0, react_2.useOwnedAmount)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.baseMint);
    const price = pricing === null || pricing === void 0 ? void 0 : pricing.buyTargetAmount(1);
    const total = pricing === null || pricing === void 0 ? void 0 : pricing.buyTargetAmount(Number(qty) || 1);
    const notEnoughFunds = (balance || 0) < (total || 0);
    const passedMintCap = mintCapNumber && ((targetSupplyNumber || 0) >= (mintCapNumber || 0));
    const remainingAmount = (mintCapNumber || 0) - (targetSupplyNumber || 0);
    const isAdmin = publicKey &&
        ((_b = tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.reserveAuthority) === null || _b === void 0 ? void 0 : _b.equals(publicKey));
    name = (targetMetadata === null || targetMetadata === void 0 ? void 0 : targetMetadata.data.name) || name;
    image = targetImage || image;
    description = (targetData === null || targetData === void 0 ? void 0 : targetData.description) || description;
    const dataMissing = !name && !image && !description;
    if (!targetMetaLoading && dataMissing) {
        return (react_3.default.createElement(react_1.Center, { height: "300px" },
            react_3.default.createElement(react_1.Text, null,
                react_3.default.createElement("b", null, "404: "),
                " Not found")));
    }
    if (dataMissing) {
        return react_3.default.createElement(react_1.Spinner, null);
    }
    return (react_3.default.createElement(react_1.Box, { pt: "8", px: { base: "5", lg: "8" }, pb: { base: "10", lg: "8" }, w: "full" },
        react_3.default.createElement(react_1.Stack, { direction: { base: "column", md: "row" }, spacing: "8" },
            react_3.default.createElement(react_1.Box, { flex: "1" },
                react_3.default.createElement(react_1.Stack, { spacing: "4" },
                    react_3.default.createElement(react_1.AspectRatio, { ratio: 4 / 3 },
                        react_3.default.createElement(react_1.Image, { rounded: "md", src: image, objectFit: "cover", alt: "Placeholder", fallback: react_3.default.createElement(react_1.Skeleton, null) })))),
            react_3.default.createElement(react_1.Box, { flex: "1" },
                react_3.default.createElement(react_1.Stack, { spacing: { base: "4", md: "8" } },
                    react_3.default.createElement(react_1.Stack, { spacing: { base: "2", md: "4" } },
                        react_3.default.createElement(react_1.Stack, { spacing: "3" },
                            react_3.default.createElement(react_1.Badge, { alignSelf: "start", textTransform: "none", size: "sm", fontWeight: "semibold", lineHeight: "1rem", borderRadius: "base", py: "1", px: "2", bg: "primary.500", color: "white" }, passedMintCap ? "Sold Out" : "For Sale")),
                        react_3.default.createElement(react_1.Heading, { size: "lg", fontWeight: "medium" }, name),
                        react_3.default.createElement(react_1.Stack, { direction: { base: "column", md: "row" }, spacing: "1", align: "baseline", justify: "space-between" },
                            react_3.default.createElement(react_1.HStack, { spacing: "1" },
                                react_3.default.createElement(react_1.Text, { as: "span", fontSize: "lg", fontWeight: "semibold", color: "gray.700" }, baseMetadata === null || baseMetadata === void 0 ? void 0 :
                                    baseMetadata.data.symbol,
                                    " ",
                                    pricingLoading ? react_3.default.createElement(react_1.Spinner, { size: "xs" }) : price === null || price === void 0 ? void 0 : price.toFixed(2)))),
                        react_3.default.createElement(react_1.Text, { color: "gray.600", whiteSpace: "pre-line" }, description)),
                    react_3.default.createElement(react_1.HStack, { spacing: { base: "4", md: "8" }, align: "flex-end", justify: "space-evenly" },
                        mintCapNumber && (react_3.default.createElement(react_1.Box, { flex: "1" },
                            react_3.default.createElement(react_1.FormControl, null,
                                react_3.default.createElement(react_1.FormLabel, { fontSize: "sm", fontWeight: "medium" },
                                    react_3.default.createElement(react_1.HStack, { spacing: "2" },
                                        react_3.default.createElement(react_1.Text, null, "Available"),
                                        mintCapNumber && remainingAmount < mintCapNumber / 4 && (react_3.default.createElement(react_1.HStack, { spacing: "1" },
                                            react_3.default.createElement(react_1.Icon, { as: fi_1.FiClock }),
                                            react_3.default.createElement(react_1.Text, { fontSize: "xs", fontWeight: "medium" }, "Low stock"))))),
                                react_3.default.createElement(react_1.Flex, { borderRadius: "base", px: "2", py: "0.705rem", borderWidth: "1px", justifyContent: "space-between" },
                                    react_3.default.createElement(react_1.Center, { minW: "8" },
                                        react_3.default.createElement(react_1.Text, { as: "span", fontWeight: "semibold", userSelect: "none" }, bondingLoading ? (react_3.default.createElement(react_1.Spinner, { size: "xs" })) : (react_3.default.createElement("span", null,
                                            remainingAmount,
                                            " / ",
                                            mintCapNumber || 0)))))))),
                        react_3.default.createElement(react_1.Box, { flex: "1" },
                            react_3.default.createElement(QuantityPicker_1.QuantityPicker, { defaultValue: 1, max: remainingAmount > 0
                                    ? Math.round(remainingAmount / 2)
                                    : mintCapNumber
                                        ? 0
                                        : Infinity, onChange: (num) => setQty(num) }))),
                    react_3.default.createElement(react_1.Stack, { spacing: "3" },
                        error && (react_3.default.createElement(react_1.Alert, { status: "error" },
                            react_3.default.createElement(react_1.Alert, { status: "error" }, error.toString()))),
                        react_3.default.createElement(react_1.Button, { isDisabled: !connected ||
                                notEnoughFunds ||
                                passedMintCap ||
                                !qtyNumber ||
                                qtyNumber <= 0, isLoading: loading, value: qty, loadingText: awaitingApproval ? "Awaiting Approval" : "Loading", onClick: () => qtyNumber &&
                                qtyNumber > 0 &&
                                execute(tokenBondingSdk, tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.publicKey, qtyNumber), w: "full", size: "lg", colorScheme: "primary" }, !connected
                            ? "Connect a Wallet"
                            : notEnoughFunds
                                ? `Not Enough ${(baseMetadata === null || baseMetadata === void 0 ? void 0 : baseMetadata.data.symbol) || "funds"}`
                                : passedMintCap
                                    ? "Sold Out"
                                    : "Buy"),
                        isAdmin && tokenBonding && (react_3.default.createElement(SaleItemAdmin_1.SaleItemAdmin, { tokenBondingKey: tokenBonding.publicKey })),
                        react_3.default.createElement(react_1.Center, null,
                            react_3.default.createElement(react_1.Text, null,
                                "Total: ", baseMetadata === null || baseMetadata === void 0 ? void 0 :
                                baseMetadata.data.symbol,
                                " ",
                                pricingLoading ? react_3.default.createElement(react_1.Spinner, { size: "xs" }) : total,
                                " "))))))));
};
exports.SaleItem = SaleItem;
//# sourceMappingURL=SaleItem.js.map