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
exports.ManualForm = void 0;
const react_1 = require("@chakra-ui/react");
const yup_1 = require("@hookform/resolvers/yup");
const mpl_token_metadata_1 = require("@metaplex-foundation/mpl-token-metadata");
const spl_token_1 = require("@solana/spl-token");
const web3_js_1 = require("@solana/web3.js");
const react_2 = require("@strata-foundation/react");
const spl_utils_1 = require("@strata-foundation/spl-utils");
const router_1 = require("next/router");
const react_3 = __importDefault(require("react"));
const react_async_hook_1 = require("react-async-hook");
const react_hook_form_1 = require("react-hook-form");
const yup = __importStar(require("yup"));
const routes_1 = require("../../utils/routes");
const FormControlWithError_1 = require("./FormControlWithError");
const TokenMetadataInputs_1 = require("./TokenMetadataInputs");
const TokenMintDecimalsInputs_1 = require("./TokenMintDecimalsInputs");
const wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
const wallet_adapter_react_ui_1 = require("@solana/wallet-adapter-react-ui");
const validationSchema = yup.object({
    image: yup.mixed(),
    name: yup.string().required().min(2),
    description: yup.string().required().min(2),
    symbol: yup.string().required().min(2),
    supply: yup.number().required().min(0),
    keepMintAuthority: yup.boolean(),
    keepFreezeAuthority: yup.boolean(),
    decimals: yup.number().required(),
});
function createFullyManaged(tokenMetadataSdk, values) {
    return __awaiter(this, void 0, void 0, function* () {
        const targetMintKeypair = web3_js_1.Keypair.generate();
        const targetMint = targetMintKeypair.publicKey;
        const me = tokenMetadataSdk.provider.wallet.publicKey;
        const instructions = yield (0, spl_utils_1.createMintInstructions)(tokenMetadataSdk.provider, me, targetMintKeypair.publicKey, values.decimals, values.keepFreezeAuthority ? me : undefined);
        const signers = [targetMintKeypair];
        const uri = yield tokenMetadataSdk.uploadMetadata({
            provider: values.provider,
            name: values.name,
            symbol: values.symbol,
            description: values.description,
            image: values.image,
            mint: targetMintKeypair.publicKey,
        });
        const metadata = new mpl_token_metadata_1.DataV2({
            // Max name len 32
            name: values.name.substring(0, 32),
            symbol: values.symbol.substring(0, 10),
            uri,
            sellerFeeBasisPoints: 0,
            creators: null,
            collection: null,
            uses: null,
        });
        const { instructions: metadataInstructions, signers: metadataSigners, output, } = yield tokenMetadataSdk.createMetadataInstructions({
            data: metadata,
            mint: targetMint,
            mintAuthority: me,
            authority: me,
        });
        instructions.push(...metadataInstructions);
        signers.push(...metadataSigners);
        const ata = yield spl_token_1.Token.getAssociatedTokenAddress(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, targetMint, me, true);
        instructions.push(spl_token_1.Token.createAssociatedTokenAccountInstruction(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, targetMint, ata, me, me), spl_token_1.Token.createMintToInstruction(spl_token_1.TOKEN_PROGRAM_ID, targetMint, ata, me, [], new spl_token_1.u64((values.supply * Math.pow(10, values.decimals)).toLocaleString("fullwide", { useGrouping: false }))));
        if (!values.keepMintAuthority) {
            instructions.push(spl_token_1.Token.createSetAuthorityInstruction(spl_token_1.TOKEN_PROGRAM_ID, targetMint, null, "MintTokens", me, []));
        }
        yield (0, spl_utils_1.sendInstructions)(new Map(), tokenMetadataSdk.provider, instructions, signers, me);
        return targetMintKeypair.publicKey;
    });
}
const ManualForm = () => {
    const formProps = (0, react_hook_form_1.useForm)({
        resolver: (0, yup_1.yupResolver)(validationSchema),
    });
    const { register, handleSubmit, formState: { errors, isSubmitting }, } = formProps;
    const { connected } = (0, wallet_adapter_react_1.useWallet)();
    const { visible, setVisible } = (0, wallet_adapter_react_ui_1.useWalletModal)();
    const { awaitingApproval } = (0, react_2.useProvider)();
    const { execute, loading, error } = (0, react_async_hook_1.useAsyncCallback)(createFullyManaged);
    const { tokenMetadataSdk } = (0, react_2.useStrataSdks)();
    const router = (0, router_1.useRouter)();
    const onSubmit = (values) => __awaiter(void 0, void 0, void 0, function* () {
        const mintKey = yield execute(tokenMetadataSdk, values);
        router.push((0, routes_1.route)(routes_1.routes.sell, { mint: mintKey.toBase58() }), undefined, {
            shallow: true,
        });
    });
    return (react_3.default.createElement(react_1.Flex, { position: "relative" },
        !connected && (react_3.default.createElement(react_1.Flex, { position: "absolute", w: "full", h: "full", zIndex: "1", flexDirection: "column" },
            react_3.default.createElement(react_1.Flex, { justifyContent: "center" },
                react_3.default.createElement(react_1.Button, { colorScheme: "orange", variant: "outline", onClick: () => setVisible(!visible) }, "Connect Wallet")),
            react_3.default.createElement(react_1.Flex, { w: "full", h: "full", bg: "white", opacity: "0.6" }))),
        react_3.default.createElement(react_hook_form_1.FormProvider, Object.assign({}, formProps),
            react_3.default.createElement("form", { onSubmit: handleSubmit(onSubmit) },
                react_3.default.createElement(react_1.VStack, { spacing: 8, mt: !connected ? 12 : 0 },
                    react_3.default.createElement(TokenMetadataInputs_1.TokenMetadataInputs, { entityName: "token" }),
                    react_3.default.createElement(FormControlWithError_1.FormControlWithError, { id: "symbol", help: "The symbol for this token, ex: SOL", label: "Symbol", errors: errors },
                        react_3.default.createElement(react_1.Input, Object.assign({}, register("symbol")))),
                    react_3.default.createElement(TokenMintDecimalsInputs_1.TokenMintDecimalsInputs, null),
                    react_3.default.createElement(FormControlWithError_1.FormControlWithError, { id: "supply", help: "The number of tokens to mint. After creation these will be available in your wallet", label: "Supply", errors: errors },
                        react_3.default.createElement(react_1.NumberInput, { precision: 0, step: 1, min: 1 },
                            react_3.default.createElement(react_1.NumberInputField, Object.assign({}, register("supply"))))),
                    react_3.default.createElement(FormControlWithError_1.FormControlWithError, { id: "keepMintAuthority", help: `Would you like the ability to mint more than the specified supply of tokens?`, label: "Keep Mint Authority?", errors: errors },
                        react_3.default.createElement(react_1.Switch, Object.assign({}, register("keepMintAuthority")))),
                    react_3.default.createElement(FormControlWithError_1.FormControlWithError, { id: "keepFreezeAuthority", help: `Would you like the ability to freeze token accounts using this token, so that they may no longer be used.`, label: "Keep Freeze Authority?", errors: errors },
                        react_3.default.createElement(react_1.Switch, Object.assign({}, register("keepFreezeAuthority")))),
                    error && (react_3.default.createElement(react_1.Alert, { status: "error" },
                        react_3.default.createElement(react_1.Alert, { status: "error" }, error.toString()))),
                    react_3.default.createElement(react_1.Button, { type: "submit", alignSelf: "flex-end", colorScheme: "primary", isLoading: isSubmitting || loading, loadingText: awaitingApproval ? "Awaiting Approval" : "Loading" }, "Create Token"))))));
};
exports.ManualForm = ManualForm;
//# sourceMappingURL=ManualForm.js.map