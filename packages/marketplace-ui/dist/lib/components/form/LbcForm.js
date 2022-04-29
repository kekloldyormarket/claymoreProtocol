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
exports.LbcForm = void 0;
const react_1 = require("@chakra-ui/react");
const yup_1 = require("@hookform/resolvers/yup");
const mpl_token_metadata_1 = require("@metaplex-foundation/mpl-token-metadata");
const anchor_1 = require("@project-serum/anchor");
const spl_token_1 = require("@solana/spl-token");
const wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
const web3_js_1 = require("@solana/web3.js");
const marketplace_sdk_1 = require("@strata-foundation/marketplace-sdk");
const react_2 = require("@strata-foundation/react");
const bn_js_1 = __importDefault(require("bn.js"));
const spl_utils_1 = require("@strata-foundation/spl-utils");
const router_1 = require("next/router");
const react_3 = __importStar(require("react"));
const react_async_hook_1 = require("react-async-hook");
const react_hook_form_1 = require("react-hook-form");
const yup = __importStar(require("yup"));
const marketplaceSdkContext_1 = require("../../contexts/marketplaceSdkContext");
const routes_1 = require("../../utils/routes");
const Disclosures_1 = require("./Disclosures");
const FormControlWithError_1 = require("./FormControlWithError");
const MintSelect_1 = require("./MintSelect");
const Recipient_1 = require("./Recipient");
const TokenMetadataInputs_1 = require("./TokenMetadataInputs");
const UseExistingMintInputs_1 = require("./UseExistingMintInputs");
const wallet_adapter_react_ui_1 = require("@solana/wallet-adapter-react-ui");
const TokenMintDecimalsInputs_1 = require("./TokenMintDecimalsInputs");
const TokenIntervalnputs_1 = require("./TokenIntervalnputs");
const validationSchema = yup.object({
    mint: yup.string().required(),
    useExistingMint: yup.boolean(),
    useCandyMachine: yup.boolean(),
    existingMint: yup.string().when(["useExistingMint", "useCandyMachine"], {
        is: (useExistingMint, useCandyMachine) => useExistingMint && !useCandyMachine,
        then: yup.string().required(),
    }),
    candyMachineId: yup.string().when("useCandyMachine", {
        is: true,
        then: yup.string().required(),
    }),
    image: yup.mixed(),
    name: yup.string().when(["useExistingMint", "useCandyMachine"], {
        is: (one, two) => !one && !two,
        then: yup.string().required().min(2),
    }),
    description: yup.string(),
    symbol: yup.string().when("useExistingMint", {
        is: false,
        then: yup.string(),
    }),
    authority: yup.string().required(),
    startPrice: yup.number().min(0).required(),
    minPrice: yup.number().min(0).required(),
    interval: yup.number().min(0).required(),
    decimals: yup
        .number()
        .nullable()
        .transform((v) => {
        return v === "" || isNaN(v) ? null : v;
    })
        .when(["useExistingMint", "useCandyMachine"], {
        is: (one, two) => !one && !two,
        then: yup.number().min(0).required(),
    }),
    mintCap: yup.number().min(1).required(),
    goLiveDate: yup.date().required(),
    disclosures: Disclosures_1.disclosuresSchema,
});
function createLiquidityBootstrapper(marketplaceSdk, values) {
    return __awaiter(this, void 0, void 0, function* () {
        const targetMintKeypair = web3_js_1.Keypair.generate();
        const authority = new web3_js_1.PublicKey(values.authority);
        const mint = new web3_js_1.PublicKey(values.mint);
        let metadata;
        if (values.useExistingMint && !values.useCandyMachine) {
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
        else if (values.useCandyMachine) {
            metadata = new mpl_token_metadata_1.DataV2({
                // Max name len 32
                name: "Candymachine Mint Token",
                symbol: "MINT",
                uri: "",
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
                symbol: values.symbol || "",
                description: values.description,
                image: values.image,
                mint: targetMintKeypair.publicKey,
            });
            metadata = new mpl_token_metadata_1.DataV2({
                // Max name len 32
                name: values.name.substring(0, 32),
                symbol: (values.symbol || "").substring(0, 10),
                uri,
                sellerFeeBasisPoints: 0,
                creators: null,
                collection: null,
                uses: null,
            });
        }
        const { output: { targetMint }, instructions, signers, } = yield marketplaceSdk.createLiquidityBootstrapperInstructions({
            targetMintKeypair,
            authority,
            metadata,
            baseMint: mint,
            startPrice: Number(values.startPrice),
            minPrice: Number(values.minPrice),
            interval: Number(values.interval),
            maxSupply: Number(values.mintCap),
            bondingArgs: {
                targetMintDecimals: Number(values.decimals || 0),
                goLiveDate: values.goLiveDate,
                sellFrozen: values.useExistingMint
            },
        });
        if (values.useExistingMint && !values.useCandyMachine) {
            const retrievalInstrs = yield marketplaceSdk.createRetrievalCurveForSetSupplyInstructions({
                reserveAuthority: authority,
                supplyMint: new web3_js_1.PublicKey(values.existingMint),
                supplyAmount: values.mintCap,
                targetMint,
            });
            instructions.push(retrievalInstrs.instructions);
            signers.push(retrievalInstrs.signers);
        }
        // Update the candymachine to use this mint
        if (values.useCandyMachine) {
            const candyMachineId = new web3_js_1.PublicKey(values.candyMachineId);
            const incinerator = new web3_js_1.PublicKey("1nc1nerator11111111111111111111111111111111");
            const incineratorAta = yield spl_token_1.Token.getAssociatedTokenAddress(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, targetMint, incinerator, true);
            const lastInstrs = instructions[instructions.length - 1];
            lastInstrs.push(spl_token_1.Token.createAssociatedTokenAccountInstruction(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, targetMint, incineratorAta, incinerator, marketplaceSdk.provider.wallet.publicKey));
            const candymachineIdl = yield anchor_1.Program.fetchIdl(new web3_js_1.PublicKey("cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ"), marketplaceSdk.provider);
            const candymachineProgram = new anchor_1.Program(candymachineIdl, new web3_js_1.PublicKey("cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ"), marketplaceSdk.provider);
            const candymachine = yield candymachineProgram.account.candyMachine.fetch(candyMachineId);
            const ix = yield candymachineProgram.instruction.updateCandyMachine(Object.assign(Object.assign({}, candymachine.data), { price: new bn_js_1.default(1) }), {
                accounts: {
                    candyMachine: candyMachineId,
                    authority: marketplaceSdk.provider.wallet.publicKey,
                    wallet: incineratorAta,
                },
            });
            ix.keys.push({
                pubkey: targetMint,
                isWritable: false,
                isSigner: false,
            });
            lastInstrs.push(ix);
        }
        yield (0, spl_utils_1.sendMultipleInstructions)(marketplaceSdk.tokenBondingSdk.errors || new Map(), marketplaceSdk.provider, instructions, signers);
        return targetMint;
    });
}
const LbcForm = () => {
    const formProps = (0, react_hook_form_1.useForm)({
        resolver: (0, yup_1.yupResolver)(validationSchema),
        defaultValues: { useExistingMint: true },
    });
    const { register, handleSubmit, watch, setValue, setError, clearErrors, formState: { errors, isSubmitting }, } = formProps;
    const { publicKey, connected } = (0, wallet_adapter_react_1.useWallet)();
    const { visible, setVisible } = (0, wallet_adapter_react_ui_1.useWalletModal)();
    const { info: tokenRef } = (0, react_2.usePrimaryClaimedTokenRef)(publicKey);
    const { awaitingApproval } = (0, react_2.useProvider)();
    const { execute, loading, error } = (0, react_async_hook_1.useAsyncCallback)(createLiquidityBootstrapper);
    const { marketplaceSdk } = (0, marketplaceSdkContext_1.useMarketplaceSdk)();
    const router = (0, router_1.useRouter)();
    const { authority, mint, useExistingMint, useCandyMachine, startPrice, minPrice, } = watch();
    (0, react_3.useEffect)(() => {
        setValue("useCandyMachine", !!router.query["candymachine"]);
    }, [router, setValue]);
    (0, react_3.useEffect)(() => {
        if (startPrice && minPrice) {
            if (minPrice < startPrice / 5) {
                setError("startPrice", {
                    type: "custom",
                    message: "The diffrence between Starting Price and Minimum Price is greater than the reccommended 5x of each other.",
                });
                setError("minPrice", {
                    type: "custom",
                    message: "The diffrence between Minimum Price and Starting Price is greater than the reccommended 5x of each other.",
                });
            }
            else {
                clearErrors("minPrice");
                clearErrors("startPrice");
            }
        }
    }, [startPrice, minPrice, setError, clearErrors]);
    const onSubmit = (values) => __awaiter(void 0, void 0, void 0, function* () {
        const mintKey = yield execute(marketplaceSdk, values);
        if (values.useCandyMachine) {
            router.push((0, routes_1.route)(routes_1.routes.mintLbc, { candyMachineId: values.candyMachineId }), undefined, { shallow: true });
        }
        else {
            router.push((0, routes_1.route)(routes_1.routes.tokenLbc, { mintKey: mintKey.toBase58() }), undefined, { shallow: true });
        }
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
                    !useCandyMachine && react_3.default.createElement(UseExistingMintInputs_1.UseExistingMintInputs, null),
                    react_3.default.createElement(react_1.Box, { w: "full" },
                        react_3.default.createElement(react_1.Collapse, { in: useCandyMachine, animateOpacity: true },
                            react_3.default.createElement(FormControlWithError_1.FormControlWithError, { id: "candyMachineId", help: "The id of the candymachine", label: "Candy Machine ID", errors: errors },
                                react_3.default.createElement(react_1.Input, Object.assign({}, register("candyMachineId"))))),
                        react_3.default.createElement(react_1.Collapse, { in: !useExistingMint && !useCandyMachine, animateOpacity: true },
                            react_3.default.createElement(react_1.VStack, { spacing: 8 },
                                react_3.default.createElement(TokenMetadataInputs_1.TokenMetadataInputs, { entityName: "token" }),
                                react_3.default.createElement(TokenMintDecimalsInputs_1.TokenMintDecimalsInputs, null),
                                react_3.default.createElement(FormControlWithError_1.FormControlWithError, { id: "symbol", help: "A less than 10 character symbol for the token being sold", label: "Symbol", errors: errors },
                                    react_3.default.createElement(react_1.Input, Object.assign({}, register("symbol"))))))),
                    react_3.default.createElement(FormControlWithError_1.FormControlWithError, { id: "mint", help: `The token that should be used to buy this token. If you want users to purchase your token using SOL, use ${spl_token_1.NATIVE_MINT.toBase58()}`, label: "Purchase Mint", errors: errors },
                        tokenRef && (react_3.default.createElement(react_1.Button, { variant: "link", onClick: () => setValue("mint", tokenRef.mint.toBase58()) }, "Use my Social Token")),
                        react_3.default.createElement(MintSelect_1.MintSelect, { value: watch("mint"), onChange: (s) => setValue("mint", s) })),
                    react_3.default.createElement(FormControlWithError_1.FormControlWithError, { id: "authority", help: "The wallet that can claim the bootstrapped liquidity", label: "Beneficiary", errors: errors },
                        publicKey && (react_3.default.createElement(react_1.Button, { variant: "link", onClick: () => setValue("authority", publicKey.toBase58()) }, "Set to My Wallet")),
                        react_3.default.createElement(Recipient_1.Recipient, { name: authorityRegister.name, value: authority, onChange: authorityRegister.onChange })),
                    react_3.default.createElement(FormControlWithError_1.FormControlWithError, { id: "startPrice", help: "The starting price for this token. You should set this a little above the expected price of the token. Prices will fall to the fair price. Note that if there's enough demand, they can also increase from this price.", label: "Starting Price", errors: errors },
                        react_3.default.createElement(react_1.Input, Object.assign({ type: "number", min: 0, step: 0.000000000001 }, register("startPrice")))),
                    react_3.default.createElement(FormControlWithError_1.FormControlWithError, { id: "minPrice", help: "The minimum possible price for this token, if nobody buys during the bootstrapping interval. The wider the range between starting price and minimum price, the more rapidly the price will fall. It is reccommended to keep these numbers within 5x of each other.", label: "Minimum Price", errors: errors },
                        react_3.default.createElement(react_1.Input, Object.assign({ type: "number", min: 0, step: 0.000000000001 }, register("minPrice")))),
                    react_3.default.createElement(TokenIntervalnputs_1.TokenIntervalInputs, null),
                    react_3.default.createElement(FormControlWithError_1.FormControlWithError, { id: "mintCap", help: "The number of tokens to mint. Note that, depending on the above parameters this liqudity bootstrapping may not sell out", label: "Number of Tokens", errors: errors },
                        react_3.default.createElement(react_1.Input, Object.assign({ type: "number", min: 0, step: 0.000000000001 }, register("mintCap")))),
                    react_3.default.createElement(FormControlWithError_1.FormControlWithError, { id: "goLiveDate", help: "The time this LBC will go live, in your browser's local timezone", label: "Launch Date", errors: errors },
                        react_3.default.createElement(react_1.Input, Object.assign({ type: "datetime-local" }, register("goLiveDate")))),
                    react_3.default.createElement(Disclosures_1.Disclosures, { fees: marketplace_sdk_1.LBC_CURVE_FEES }),
                    error && react_3.default.createElement(react_1.Alert, { status: "error" }, error.toString()),
                    react_3.default.createElement(react_1.Button, { type: "submit", alignSelf: "flex-end", colorScheme: "primary", isLoading: isSubmitting || loading, loadingText: awaitingApproval ? "Awaiting Approval" : "Loading" }, "Create LBC"))))));
};
exports.LbcForm = LbcForm;
//# sourceMappingURL=LbcForm.js.map