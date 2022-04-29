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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BountyForm = void 0;
const react_1 = require("@chakra-ui/react");
const yup_1 = require("@hookform/resolvers/yup");
const mpl_token_metadata_1 = require("@metaplex-foundation/mpl-token-metadata");
const spl_token_1 = require("@solana/spl-token");
const wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
const wallet_adapter_react_ui_1 = require("@solana/wallet-adapter-react-ui");
const web3_js_1 = require("@solana/web3.js");
const marketplace_sdk_1 = require("@strata-foundation/marketplace-sdk");
const react_2 = require("@strata-foundation/react");
const react_3 = __importStar(require("react"));
const react_async_hook_1 = require("react-async-hook");
const react_hook_form_1 = require("react-hook-form");
const yup = __importStar(require("yup"));
const marketplaceSdkContext_1 = require("../../contexts/marketplaceSdkContext");
const FormControlWithError_1 = require("./FormControlWithError");
const MintSelect_1 = require("./MintSelect");
const Recipient_1 = require("./Recipient");
const TokenMetadataInputs_1 = require("./TokenMetadataInputs");
const validationSchema = yup.object({
    mint: yup.string().required(),
    image: yup.mixed(),
    name: yup.string().required().min(2),
    description: yup.string(),
    shortName: yup.string().min(2).max(10),
    contact: yup.string(),
    discussion: yup.string(),
    authority: yup.string().required(),
});
function createBounty(marketplaceSdk, values) {
    return __awaiter(this, void 0, void 0, function* () {
        const mint = new web3_js_1.PublicKey(values.mint);
        const authority = new web3_js_1.PublicKey(values.authority);
        const targetMintKeypair = web3_js_1.Keypair.generate();
        const uri = yield marketplaceSdk.tokenMetadataSdk.uploadMetadata({
            provider: values.provider,
            name: values.name,
            symbol: values.shortName,
            description: values.description,
            image: values.image,
            mint: targetMintKeypair.publicKey,
            attributes: marketplace_sdk_1.MarketplaceSdk.bountyAttributes({
                mint,
                discussion: values.discussion,
                contact: values.contact,
            }),
        });
        const { targetMint } = yield marketplaceSdk.createBounty({
            targetMintKeypair,
            authority,
            metadataUpdateAuthority: marketplaceSdk.provider.wallet.publicKey,
            metadata: new mpl_token_metadata_1.DataV2({
                // Max name len 32
                name: values.name.substring(0, 32),
                symbol: values.shortName.substring(0, 10),
                uri,
                sellerFeeBasisPoints: 0,
                creators: null,
                collection: null,
                uses: null,
            }),
            baseMint: mint,
        });
        return targetMint;
    });
}
const BountyForm = ({ defaultValues = {}, onComplete, hide = new Set(), }) => {
    const formProps = (0, react_hook_form_1.useForm)({
        resolver: (0, yup_1.yupResolver)(validationSchema),
        defaultValues,
    });
    const { register, handleSubmit, watch, setValue, formState: { errors, isSubmitting }, } = formProps;
    const { publicKey, connected } = (0, wallet_adapter_react_1.useWallet)();
    const { visible, setVisible } = (0, wallet_adapter_react_ui_1.useWalletModal)();
    const { info: tokenRef } = (0, react_2.usePrimaryClaimedTokenRef)(publicKey);
    const { awaitingApproval } = (0, react_2.useProvider)();
    const { execute, loading, error } = (0, react_async_hook_1.useAsyncCallback)(createBounty);
    const { marketplaceSdk } = (0, marketplaceSdkContext_1.useMarketplaceSdk)();
    const { authority, mint } = watch();
    const mintKey = (0, react_2.usePublicKey)(mint);
    const { info: mintTokenRef } = (0, react_2.useMintTokenRef)(mintKey);
    // Social tokens should default bounties to the owner of the social token
    // as the authority. This is generally better because if the owner acts in
    // bad faith, they'll collapse the value of their own token. Vs a fan who can
    // easily not give money to the creator
    (0, react_3.useEffect)(() => {
        if (!authority && mintTokenRef) {
            const owner = mintTokenRef.owner;
            if (owner) {
                setValue("authority", owner.toBase58());
            }
            else {
                setValue("authority", mintTokenRef.publicKey.toBase58());
            }
        }
    }, [mintTokenRef, authority, setValue]);
    const onSubmit = (values) => __awaiter(void 0, void 0, void 0, function* () {
        const mintKey = yield execute(marketplaceSdk, values);
        onComplete && onComplete(mintKey);
    });
    const authorityRegister = register("authority");
    return (react_3.default.createElement(react_1.Flex, { position: "relative" },
        !connected && (react_3.default.createElement(react_1.Flex, { position: "absolute", w: "full", h: "full", zIndex: "1", flexDirection: "column" },
            react_3.default.createElement(react_1.Flex, { justifyContent: "center" },
                react_3.default.createElement(react_1.Button, { colorScheme: "orange", variant: "outline", onClick: () => setVisible(!visible) }, "Connect Wallet")),
            react_3.default.createElement(react_1.Flex, { w: "full", h: "full", bg: "white", opacity: "0.6" }))),
        react_3.default.createElement(react_hook_form_1.FormProvider, Object.assign({}, formProps),
            react_3.default.createElement("form", { onSubmit: handleSubmit(onSubmit) },
                react_3.default.createElement(react_1.VStack, { spacing: 8, mt: !connected ? 12 : 0 },
                    react_3.default.createElement(TokenMetadataInputs_1.TokenMetadataInputs, null),
                    react_3.default.createElement(FormControlWithError_1.FormControlWithError, { id: "shortName", help: "A less than 10 character name for this bounty. This will be the bounty token's symbol.", label: "Short Name", errors: errors },
                        react_3.default.createElement(react_1.Input, Object.assign({}, register("shortName")))),
                    !hide.has("mint") && (react_3.default.createElement(FormControlWithError_1.FormControlWithError, { id: "mint", help: `The mint that should be used on this bounty, example ${spl_token_1.NATIVE_MINT.toBase58()} for SOL`, label: "Mint", errors: errors },
                        tokenRef && (react_3.default.createElement(react_1.Button, { variant: "link", onClick: () => setValue("mint", tokenRef.mint.toBase58()) }, "Use my Social Token")),
                        react_3.default.createElement(MintSelect_1.MintSelect, { value: watch("mint"), onChange: (s) => setValue("mint", s) }))),
                    !hide.has("authority") && (react_3.default.createElement(FormControlWithError_1.FormControlWithError, { id: "authority", help: "The wallet that signs to disburse the funds of this bounty when it is completed. \n            For social tokens, this defaults to the wallet associated with the social token. This\n            can also be an SPL Governance address or a multisig.", label: "Approver", errors: errors },
                        publicKey && (react_3.default.createElement(react_1.Button, { variant: "link", onClick: () => setValue("authority", publicKey.toBase58()) }, "Set to My Wallet")),
                        react_3.default.createElement(Recipient_1.Recipient, { name: authorityRegister.name, value: authority, onChange: authorityRegister.onChange }))),
                    !hide.has("contact") && (react_3.default.createElement(FormControlWithError_1.FormControlWithError, { id: "contact", help: "Who to contact regarding the bounty. This can be an email address, twitter handle, etc.", label: "Contact Information", errors: errors },
                        react_3.default.createElement(react_1.Input, Object.assign({}, register("contact"))))),
                    !hide.has("discussion") && (react_3.default.createElement(FormControlWithError_1.FormControlWithError, { id: "discussion", help: "A link to where this bounty is actively being discussed. This can be a github issue, forum link, etc. Use this to coordinate the bounty.", label: "Discussion", errors: errors },
                        react_3.default.createElement(react_1.Input, Object.assign({}, register("discussion"))))),
                    error && react_3.default.createElement(react_1.Alert, { status: "error" }, error.toString()),
                    react_3.default.createElement(react_1.Button, { type: "submit", alignSelf: "flex-end", colorScheme: "primary", isLoading: isSubmitting || loading, loadingText: awaitingApproval ? "Awaiting Approval" : "Loading" }, "Send Bounty"))))));
};
exports.BountyForm = BountyForm;
//# sourceMappingURL=BountyForm.js.map