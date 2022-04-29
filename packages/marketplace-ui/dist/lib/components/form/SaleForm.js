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
exports.SaleForm = void 0;
const react_1 = require("@chakra-ui/react");
const yup_1 = require("@hookform/resolvers/yup");
const mpl_token_metadata_1 = require("@metaplex-foundation/mpl-token-metadata");
const spl_token_1 = require("@solana/spl-token");
const wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
const web3_js_1 = require("@solana/web3.js");
const marketplace_sdk_1 = require("@strata-foundation/marketplace-sdk");
const react_2 = require("@strata-foundation/react");
const spl_utils_1 = require("@strata-foundation/spl-utils");
const router_1 = require("next/router");
const react_3 = __importDefault(require("react"));
const react_async_hook_1 = require("react-async-hook");
const react_hook_form_1 = require("react-hook-form");
const bs_1 = require("react-icons/bs");
const yup = __importStar(require("yup"));
const marketplaceSdkContext_1 = require("../../contexts/marketplaceSdkContext");
const routes_1 = require("../../utils/routes");
const Disclosures_1 = require("./Disclosures");
const FormControlWithError_1 = require("./FormControlWithError");
const MintSelect_1 = require("./MintSelect");
const TokenMetadataInputs_1 = require("./TokenMetadataInputs");
const UseExistingMintInputs_1 = require("./UseExistingMintInputs");
const wallet_adapter_react_ui_1 = require("@solana/wallet-adapter-react-ui");
const TokenMintDecimalsInputs_1 = require("./TokenMintDecimalsInputs");
const validationSchema = yup.object({
    useExistingMint: yup.boolean(),
    existingMint: yup.string().when("useExistingMint", {
        is: true,
        then: yup.string().required(),
    }),
    decimals: yup
        .number()
        .nullable()
        .transform((v) => {
        return v === "" || isNaN(v) ? null : v;
    })
        .when("useExistingMint", {
        is: false,
        then: yup.number().min(0).required(),
    }),
    mint: yup.string().required(),
    image: yup.mixed(),
    name: yup.string().when("useExistingMint", {
        is: false,
        then: yup.string().required().min(2),
    }),
    description: yup.string().when("useExistingMint", {
        is: false,
        then: yup.string().required().min(2),
    }),
    quantity: yup.number().required().min(1).integer(),
    price: yup.number().required().min(0),
    curve: yup.string(),
    disclosures: Disclosures_1.disclosuresSchema,
    goLiveDate: yup.date().required(),
});
function createMarket(marketplaceSdk, values) {
    return __awaiter(this, void 0, void 0, function* () {
        const mint = new web3_js_1.PublicKey(values.mint);
        const targetMintKeypair = web3_js_1.Keypair.generate();
        let metadata;
        if (values.useExistingMint) {
            const existingMint = new web3_js_1.PublicKey(values.existingMint);
            values.decimals = (yield (0, spl_utils_1.getMintInfo)(marketplaceSdk.provider, existingMint)).decimals;
            metadata = new mpl_token_metadata_1.DataV2({
                name: values.name || "",
                symbol: values.symbol || "",
                uri: values.uri || "",
                sellerFeeBasisPoints: 0,
                creators: null,
                collection: null,
                uses: null,
            });
        }
        else {
            const uri = yield marketplaceSdk.tokenMetadataSdk.uploadMetadata({
                provider: values.provider,
                name: values.name,
                symbol: "",
                description: values.description,
                image: values.image,
                mint: targetMintKeypair.publicKey,
                attributes: [
                    {
                        trait_type: "is_strata_sale",
                        display_type: "Strata Sale",
                        value: "true",
                    },
                ],
            });
            metadata = new mpl_token_metadata_1.DataV2({
                // Max name len 32
                name: values.name.substring(0, 32),
                symbol: "",
                uri,
                sellerFeeBasisPoints: 0,
                creators: null,
                collection: null,
                uses: null,
            });
        }
        const instructions = [];
        const signers = [];
        const marketItemInstrs = yield marketplaceSdk.createMarketItemInstructions({
            targetMintKeypair,
            metadata,
            quantity: values.quantity,
            price: values.price,
            baseMint: mint,
            bondingArgs: {
                curve: values.curve ? new web3_js_1.PublicKey(values.curve) : undefined,
                targetMintDecimals: values.decimals,
                goLiveDate: values.goLiveDate,
            },
        });
        instructions.push(...marketItemInstrs.instructions);
        signers.push(...marketItemInstrs.signers);
        if (values.useExistingMint) {
            const retrievalInstrs = yield marketplaceSdk.createRetrievalCurveForSetSupplyInstructions({
                reserveAuthority: marketplaceSdk.provider.wallet.publicKey,
                supplyMint: new web3_js_1.PublicKey(values.existingMint),
                supplyAmount: values.quantity,
                targetMint: targetMintKeypair.publicKey,
            });
            instructions.push(retrievalInstrs.instructions);
            signers.push(retrievalInstrs.signers);
        }
        yield (0, spl_utils_1.sendMultipleInstructions)(marketplaceSdk.tokenBondingSdk.errors || new Map(), marketplaceSdk.provider, instructions, signers);
        return targetMintKeypair.publicKey;
    });
}
const SaleForm = () => {
    const formProps = (0, react_hook_form_1.useForm)({
        resolver: (0, yup_1.yupResolver)(validationSchema),
        defaultValues: {
            useExistingMint: true,
        },
    });
    const { register, handleSubmit, setValue, formState: { errors, isSubmitting }, watch, } = formProps;
    const { publicKey, connected } = (0, wallet_adapter_react_1.useWallet)();
    const { visible, setVisible } = (0, wallet_adapter_react_ui_1.useWalletModal)();
    const { info: tokenRef } = (0, react_2.usePrimaryClaimedTokenRef)(publicKey);
    const { awaitingApproval } = (0, react_2.useProvider)();
    const { execute, loading, error } = (0, react_async_hook_1.useAsyncCallback)(createMarket);
    const { marketplaceSdk } = (0, marketplaceSdkContext_1.useMarketplaceSdk)();
    const router = (0, router_1.useRouter)();
    const { isOpen, onToggle } = (0, react_1.useDisclosure)();
    const onSubmit = (values) => __awaiter(void 0, void 0, void 0, function* () {
        const mintKey = yield execute(marketplaceSdk, values);
        router.push((0, routes_1.route)(values.decimals === 0 ? routes_1.routes.sale : routes_1.routes.tokenOffering, {
            mintKey: mintKey.toBase58(),
        }), undefined, { shallow: true });
    });
    const useExistingMint = watch("useExistingMint");
    return (react_3.default.createElement(react_1.Flex, { position: "relative" },
        !connected && (react_3.default.createElement(react_1.Flex, { position: "absolute", w: "full", h: "full", zIndex: "1", flexDirection: "column" },
            react_3.default.createElement(react_1.Flex, { justifyContent: "center" },
                react_3.default.createElement(react_1.Button, { colorScheme: "orange", variant: "outline", onClick: () => setVisible(!visible) }, "Connect Wallet")),
            react_3.default.createElement(react_1.Flex, { w: "full", h: "full", bg: "white", opacity: "0.6" }))),
        react_3.default.createElement(react_hook_form_1.FormProvider, Object.assign({}, formProps),
            react_3.default.createElement("form", { onSubmit: handleSubmit(onSubmit) },
                react_3.default.createElement(react_1.VStack, { spacing: 8, mt: !connected ? 12 : 0 },
                    react_3.default.createElement(UseExistingMintInputs_1.UseExistingMintInputs, null),
                    react_3.default.createElement(react_1.Box, { w: "full" },
                        react_3.default.createElement(react_1.Collapse, { in: !useExistingMint, animateOpacity: true },
                            react_3.default.createElement(react_1.VStack, { spacing: 8 },
                                react_3.default.createElement(TokenMetadataInputs_1.TokenMetadataInputs, { entityName: "token" }),
                                react_3.default.createElement(TokenMintDecimalsInputs_1.TokenMintDecimalsInputs, null)))),
                    react_3.default.createElement(FormControlWithError_1.FormControlWithError, { id: "quantity", help: "The quantity to stop selling at", label: "Quantity", errors: errors },
                        react_3.default.createElement(react_1.Input, Object.assign({ type: "number", min: 1, step: 1 }, register("quantity")))),
                    react_3.default.createElement(FormControlWithError_1.FormControlWithError, { id: "mint", help: `The token that should be used to buy this token. If you want users to purchase your token using SOL, use ${spl_token_1.NATIVE_MINT.toBase58()}`, label: "Purchase Mint", errors: errors },
                        tokenRef && (react_3.default.createElement(react_1.Button, { variant: "link", onClick: () => setValue("mint", tokenRef.mint.toBase58()) }, "Use my Social Token")),
                        react_3.default.createElement(MintSelect_1.MintSelect, { value: watch("mint"), onChange: (s) => setValue("mint", s) }),
                        " "),
                    react_3.default.createElement(FormControlWithError_1.FormControlWithError, { id: "price", help: "The price in terms of the Purchase Mint", label: "Price", errors: errors },
                        react_3.default.createElement(react_1.Input, Object.assign({ type: "number", min: 0, step: 0.0000000001 }, register("price")))),
                    react_3.default.createElement(FormControlWithError_1.FormControlWithError, { id: "goLiveDate", help: "The time this offering will go live, in your browser's local timezone", label: "Launch Date", errors: errors },
                        react_3.default.createElement(react_1.Input, Object.assign({ type: "datetime-local" }, register("goLiveDate")))),
                    react_3.default.createElement(Disclosures_1.Disclosures, { fees: marketplace_sdk_1.FIXED_CURVE_FEES }),
                    react_3.default.createElement(react_1.Flex, { alignItems: "flex-start", direction: "column", w: "full" },
                        react_3.default.createElement(react_1.Button, { textAlign: "left", rightIcon: react_3.default.createElement(react_1.Icon, { as: bs_1.BsChevronDown }), variant: "link", onClick: onToggle }, "Advanced Settings"),
                        react_3.default.createElement(react_1.Box, { w: "full" },
                            react_3.default.createElement(react_1.Collapse, { in: isOpen, animateOpacity: true },
                                react_3.default.createElement(FormControlWithError_1.FormControlWithError, { id: "curve", help: "The pricing curve to use for this item", label: "Curve", errors: errors },
                                    react_3.default.createElement(react_1.Input, Object.assign({}, register("curve"))))))),
                    error && (react_3.default.createElement(react_1.Alert, { status: "error" },
                        react_3.default.createElement(react_1.Alert, { status: "error" }, error.toString()))),
                    react_3.default.createElement(react_1.Button, { type: "submit", alignSelf: "flex-end", colorScheme: "primary", isLoading: isSubmitting || loading, loadingText: awaitingApproval ? "Awaiting Approval" : "Loading" }, "Create Sale"))))));
};
exports.SaleForm = SaleForm;
//# sourceMappingURL=SaleForm.js.map