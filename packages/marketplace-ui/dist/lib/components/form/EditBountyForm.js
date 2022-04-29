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
exports.EditBountyForm = exports.EditBountyFormRaw = void 0;
const react_1 = require("@chakra-ui/react");
const yup_1 = require("@hookform/resolvers/yup");
const mpl_token_metadata_1 = require("@metaplex-foundation/mpl-token-metadata");
const wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
const web3_js_1 = require("@solana/web3.js");
const marketplace_sdk_1 = require("@strata-foundation/marketplace-sdk");
const react_2 = require("@strata-foundation/react");
const spl_token_bonding_1 = require("@strata-foundation/spl-token-bonding");
const spl_utils_1 = require("@strata-foundation/spl-utils");
const router_1 = require("next/router");
const react_3 = __importDefault(require("react"));
const react_async_hook_1 = require("react-async-hook");
const react_hook_form_1 = require("react-hook-form");
const yup = __importStar(require("yup"));
const FormControlWithError_1 = require("./FormControlWithError");
const Recipient_1 = require("./Recipient");
const TokenMetadataInputs_1 = require("./TokenMetadataInputs");
const validationSchema = yup.object({
    image: yup.mixed(),
    name: yup.string().required().min(2),
    description: yup.string(),
    shortName: yup.string().min(2).max(10),
    contact: yup.string(),
    discussion: yup.string(),
    authority: yup.string().required(),
});
function editBounty(tokenMetadataSdk, tokenBondingSdk, values, mintKey) {
    return __awaiter(this, void 0, void 0, function* () {
        const uri = yield tokenMetadataSdk.uploadMetadata({
            provider: values.provider,
            name: values.name,
            symbol: values.shortName,
            description: values.description,
            image: values.image,
            mint: mintKey,
            attributes: marketplace_sdk_1.MarketplaceSdk.bountyAttributes({
                mint: mintKey,
                discussion: values.discussion,
                contact: values.contact,
            }),
        });
        const instructions = [];
        const signers = [];
        const { instructions: metaInstrs, signers: metaSigners } = yield tokenMetadataSdk.updateMetadataInstructions({
            metadata: yield mpl_token_metadata_1.Metadata.getPDA(mintKey),
            data: new mpl_token_metadata_1.DataV2({
                // Max name len 32
                name: values.name.substring(0, 32),
                symbol: values.shortName.substring(0, 10),
                uri,
                sellerFeeBasisPoints: 0,
                creators: null,
                collection: null,
                uses: null,
            }),
        });
        instructions.push(...metaInstrs);
        signers.push(...metaSigners);
        const tokenBondingKey = (yield spl_token_bonding_1.SplTokenBonding.tokenBondingKey(mintKey))[0];
        const tokenBondingAcct = yield tokenBondingSdk.getTokenBonding(tokenBondingKey);
        if (values.authority &&
            tokenBondingSdk.wallet.publicKey.equals(tokenBondingAcct.reserveAuthority)) {
            const authority = new web3_js_1.PublicKey(values.authority);
            const { instructions: bondInstrs, signers: bondSigners } = yield tokenBondingSdk.updateTokenBondingInstructions({
                tokenBonding: tokenBondingKey,
                generalAuthority: authority,
                reserveAuthority: authority,
            });
            instructions.push(...bondInstrs);
            signers.push(...bondSigners);
        }
        yield tokenBondingSdk.sendInstructions(instructions, signers);
        return mintKey;
    });
}
const EditBountyFormRaw = ({ mintKey, values, onComplete, hide = new Set(), }) => {
    const formProps = (0, react_hook_form_1.useForm)({
        resolver: (0, yup_1.yupResolver)(validationSchema),
        defaultValues: values,
    });
    const { register, handleSubmit, watch, setValue, formState: { errors, isSubmitting }, } = formProps;
    const { publicKey } = (0, wallet_adapter_react_1.useWallet)();
    const { awaitingApproval } = (0, react_2.useProvider)();
    const { execute, loading, error } = (0, react_async_hook_1.useAsyncCallback)(editBounty);
    const { tokenMetadataSdk, tokenBondingSdk } = (0, react_2.useStrataSdks)();
    const router = (0, router_1.useRouter)();
    const authority = watch("authority");
    const onSubmit = (values) => __awaiter(void 0, void 0, void 0, function* () {
        yield execute(tokenMetadataSdk, tokenBondingSdk, values, mintKey);
        onComplete && onComplete();
    });
    const authorityRegister = register("authority");
    return (react_3.default.createElement(react_hook_form_1.FormProvider, Object.assign({}, formProps),
        react_3.default.createElement("form", { onSubmit: handleSubmit(onSubmit) },
            react_3.default.createElement(react_1.VStack, { spacing: 8 },
                react_3.default.createElement(TokenMetadataInputs_1.TokenMetadataInputs, null),
                !hide.has("shortName") && (react_3.default.createElement(FormControlWithError_1.FormControlWithError, { id: "shortName", help: "A less than 10 character name for this bounty. This will be the bounty token's symbol.", label: "Short Name", errors: errors },
                    react_3.default.createElement(react_1.Input, Object.assign({}, register("shortName"))))),
                !hide.has("authority") && (react_3.default.createElement(FormControlWithError_1.FormControlWithError, { id: "authority", help: "The wallet that signs to disburse the funds of this bounty when it is completed. \n            For social tokens, this defaults to the wallet associated with the social token. This\n            can also be an SPL Governance address or a multisig.", label: "Approver", errors: errors },
                    publicKey && (react_3.default.createElement(react_1.Button, { variant: "link", onClick: () => setValue("authority", publicKey.toBase58()) }, "Set to My Wallet")),
                    react_3.default.createElement(Recipient_1.Recipient, { name: authorityRegister.name, value: authority, onChange: authorityRegister.onChange }))),
                !hide.has("contact") && (react_3.default.createElement(FormControlWithError_1.FormControlWithError, { id: "contact", help: "Who to contact regarding the bounty. This can be an email address, twitter handle, etc.", label: "Contact Information", errors: errors },
                    react_3.default.createElement(react_1.Input, Object.assign({}, register("contact"))))),
                !hide.has("discussion") && (react_3.default.createElement(FormControlWithError_1.FormControlWithError, { id: "discussion", help: "A link to where this bounty is actively being discussed. This can be a github issue, forum link, etc. Use this to coordinate the bounty.", label: "Discussion", errors: errors },
                    react_3.default.createElement(react_1.Input, Object.assign({}, register("discussion"))))),
                error && react_3.default.createElement(react_1.Alert, { status: "error" }, error.toString()),
                react_3.default.createElement(react_1.Button, { type: "submit", alignSelf: "flex-end", colorScheme: "primary", isLoading: isSubmitting || loading, loadingText: awaitingApproval ? "Awaiting Approval" : "Loading" }, "Send Bounty")))));
};
exports.EditBountyFormRaw = EditBountyFormRaw;
const getFileFromUrl = (url, name, defaultType = "image/jpeg") => __awaiter(void 0, void 0, void 0, function* () {
    if (!url) {
        return undefined;
    }
    const data = yield fetch(url, { cache: "no-cache" });
    const blob = yield data.blob();
    const fileName = `${name}${blob.type === defaultType ? ".jpeg" : "png"}`;
    const file = new File([blob], fileName, { type: blob.type || defaultType });
    return file;
});
const EditBountyForm = ({ mintKey, onComplete, hide = new Set(), }) => {
    const { info: tokenBonding, loading: loadingBonding } = (0, react_2.useTokenBondingFromMint)(mintKey);
    const { displayName, image, metadata, data, loading: loadingMetadata, } = (0, react_2.useTokenMetadata)(mintKey);
    const { result: file, loading } = (0, react_async_hook_1.useAsync)(getFileFromUrl, [image, "image"]);
    const attributes = react_3.default.useMemo(() => spl_utils_1.SplTokenMetadata.attributesToRecord(data === null || data === void 0 ? void 0 : data.attributes), [data]);
    if (loadingBonding ||
        loadingMetadata ||
        loading ||
        !tokenBonding ||
        !metadata) {
        return (react_3.default.createElement(react_1.Center, null,
            react_3.default.createElement(react_1.Spinner, null)));
    }
    return (react_3.default.createElement(exports.EditBountyFormRaw, { hide: new Set(["contact", "discussion"]), onComplete: onComplete, mintKey: mintKey, values: {
            authority: tokenBonding.reserveAuthority.toBase58(),
            name: displayName,
            image: file,
            description: data === null || data === void 0 ? void 0 : data.description,
            shortName: metadata === null || metadata === void 0 ? void 0 : metadata.data.symbol,
            contact: attributes === null || attributes === void 0 ? void 0 : attributes.contact,
            discussion: attributes === null || attributes === void 0 ? void 0 : attributes.discussion,
        } }));
};
exports.EditBountyForm = EditBountyForm;
//# sourceMappingURL=EditBountyForm.js.map