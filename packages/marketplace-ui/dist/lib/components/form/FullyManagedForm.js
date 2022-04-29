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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullyManagedForm = void 0;
const hydra_sdk_1 = require("@glasseaters/hydra-sdk");
const react_1 = require("@chakra-ui/react");
const mpl_token_metadata_1 = require("@metaplex-foundation/mpl-token-metadata");
const wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
const web3_js_1 = require("@solana/web3.js");
const react_2 = require("@strata-foundation/react");
const spl_token_bonding_1 = require("@strata-foundation/spl-token-bonding");
const router_1 = require("next/router");
const react_3 = __importDefault(require("react"));
const react_hook_form_1 = require("react-hook-form");
const marketplaceSdkContext_1 = require("../..//contexts/marketplaceSdkContext");
const routes_1 = require("../../utils/routes");
const FormControlWithError_1 = require("./FormControlWithError");
const TokenMetadataInputs_1 = require("./TokenMetadataInputs");
const Disclosures_1 = require("./Disclosures");
const RadioCard_1 = require("./RadioCard");
const wallet_adapter_react_ui_1 = require("@solana/wallet-adapter-react-ui");
var first = true;
const clayMint = new web3_js_1.PublicKey("12yd5cGsGeBEDJzzRxKfSttGB4bbA7oY4frEBBsiUwiq"); //"91CeYr7diK3GmyiYLG4WtX1H9qRjdeMEnmw8uSSF9ZAz")
var tokenCollectiveSdk2;
var tokenBondingSdk2;
const FullyManagedForm = () => {
    const formProps = (0, react_hook_form_1.useForm)({
        defaultValues: {
            disclosures: {
                acceptedFees: true,
            },
        },
    });
    const { register, handleSubmit, setValue, formState: { errors, isSubmitting }, watch, } = formProps;
    var wallet = (0, wallet_adapter_react_1.useWallet)();
    var connected = wallet.connected;
    var publicKey = wallet.publicKey;
    const { visible, setVisible } = (0, wallet_adapter_react_ui_1.useWalletModal)();
    const { awaitingApproval } = (0, react_2.useProvider)();
    var { tokenCollectiveSdk, tokenBondingSdk, loading: eh } = (0, react_2.useStrataSdks)();
    if (!eh) {
        tokenCollectiveSdk2 = tokenCollectiveSdk;
        tokenBondingSdk2 = tokenBondingSdk;
    }
    const { marketplaceSdk, loading } = (0, marketplaceSdkContext_1.useMarketplaceSdk)();
    const router = (0, router_1.useRouter)();
    function percentOr(percentu32, def) {
        return percentu32 ? Number((0, react_2.humanReadablePercentage)(percentu32)) : def;
    }
    var values;
    var wallet;
    var connection;
    const onSubmit = (values) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(values);
        if (marketplaceSdk) {
            const mint = clayMint;
            const tokenCollectiveSdk = marketplaceSdk.tokenCollectiveSdk;
            const tokenBondingSdk = tokenCollectiveSdk.splTokenBondingProgram;
            const targetMintKeypair = web3_js_1.Keypair.generate();
            let k = 0;
            switch (values.curveType) {
                case "utility":
                    k = 0.5;
                    break;
                case "stable":
                    k = 1;
                    break;
                case "aggressive":
                    k = 2;
                    break;
                case "lovely":
                    k = 4;
                    break;
                case "superlovely":
                    k = 6;
                    break;
            }
            let config = new spl_token_bonding_1.TimeDecayExponentialCurveConfig({
                c: Math.ceil(values.startingPrice * Math.pow(10, 2)),
                k0: k,
                k1: k,
                d: 1,
                interval: 2 * 60 * 60, // 2 hours
            });
            if (values.isAntiBot) {
                config = new spl_token_bonding_1.TimeCurveConfig()
                    .addCurve(0, new spl_token_bonding_1.TimeDecayExponentialCurveConfig({
                    c: Math.ceil(values.startingPrice * Math.pow(10, 2)),
                    k0: 0,
                    k1: 0,
                    d: 1,
                    interval: 0,
                }))
                    .addCurve(30 * 60, // 30 minutes
                new spl_token_bonding_1.TimeDecayExponentialCurveConfig({
                    c: Math.ceil(values.startingPrice * Math.pow(10, 2)),
                    k0: 0,
                    k1: k,
                    d: 0.5,
                    interval: 1.5 * 60 * 60, // 1.5 hours
                }));
            }
            var curve = yield tokenBondingSdk.initializeCurve({
                config,
            });
            const bondingOpts = {
                baseMint: mint,
                buyBaseRoyaltyPercentage: values.buyBaseRoyaltyPercentage,
                buyTargetRoyaltyPercentage: values.buyTargetRoyaltyPercentage,
                sellBaseRoyaltyPercentage: values.sellBaseRoyaltyPercentage,
                sellTargetRoyaltyPercentage: values.sellTargetRoyaltyPercentage,
                curve: curve,
                targetMint: targetMintKeypair.publicKey,
                targetMintDecimals: 2,
            };
            const uri = yield tokenCollectiveSdk.splTokenMetadata.uploadMetadata({
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
            const { ownerTokenRef } = yield tokenCollectiveSdk.createSocialToken({
                mint,
                tokenBondingParams: bondingOpts,
                owner: tokenCollectiveSdk.wallet.publicKey,
                targetMintKeypair,
                metadata,
            });
            var fanoutSdk = new hydra_sdk_1.FanoutClient(new web3_js_1.Connection("https://ssc-dao.genesysgo.net/"), 
            // @ts-ignore
            wallet);
            //const supply = 1000000 * 10 ** 6;
            //const tokenAcct = await membershipMint.createAccount(
            //  authorityWallet.publicKey
            //);
            const { fanout } = yield fanoutSdk.initializeFanout({
                totalShares: 0,
                name: `Boom` + (Math.floor(Math.random() * 999999)).toString(),
                membershipModel: hydra_sdk_1.MembershipModel.Token,
                mint: targetMintKeypair.publicKey
            });
            console.log(fanout.toBase58());
            const { tokenAccount: target } = yield fanoutSdk.initializeFanoutForMint({
                fanout,
                mint: targetMintKeypair.publicKey,
            });
            const { tokenAccount: base } = yield fanoutSdk.initializeFanoutForMint({
                fanout,
                mint: clayMint,
            });
            var bt = new web3_js_1.PublicKey("2vnUcuspVcejUTc5x45MM2EUbfivBDhcAJF3oWgZ9wsE");
            // @ts-ignore
            if (tokenBondingSdk2 && tokenCollectiveSdk2) {
                // @ts-ignore
                var lala = yield tokenCollectiveSdk2.updateTokenBondingInstructions({
                    // so this is going to need to be tokenRefKey, and not this
                    ownerTokenRef: ownerTokenRef,
                    buyTargetRoyalties: target,
                    sellTargetRoyalties: base,
                    buyBaseRoyalties: bt,
                    sellBaseRoyalties: base,
                });
                // @ts-ignore
                yield tokenCollectiveSdk2.sendInstructions(lala.instructions, lala.signers);
            }
            console.log([targetMintKeypair.publicKey, fanout]);
            router.push((0, routes_1.route)(routes_1.routes.swap, {
                mintKey: targetMintKeypair.publicKey.toBase58(), fanoutKey: fanout.toBase58()
            }), undefined, { shallow: true });
        }
        ;
    });
    const { name = "", symbol = "", isSocial, mint, curveType } = watch();
    const mintKey = (0, react_2.usePublicKey)(mint);
    const collectiveKey = (0, react_2.usePublicKey)("E5kLYTP6NfmravmLpYtA65HUgXK51X5c1gwu7Fhwd7nd"); /*Async(
      async (mint: string | undefined) =>
        mint ? SplTokenCollective.collectiveKey(new PublicKey(mint)) : undefined,
      [mint]
    );*/
    const { info: collective } = (0, react_2.useCollective)(collectiveKey); // && collectiveKey[0]);
    console.log(collective);
    const tokenBondingSettings = collective === null || collective === void 0 ? void 0 : collective.config.claimedTokenBondingSettings;
    const { metadata: baseMetadata, error: baseMetadataError, loading: baseMetadataLoading, } = (0, react_2.useTokenMetadata)(mintKey);
    const { getRootProps, getRadioProps } = (0, react_1.useRadioGroup)({
        name: "curveType",
        onChange: (option) => setValue("curveType", option),
    });
    const group = getRootProps();
    const curveOptions = [
        {
            value: "superlovely",
            heading: "superlovely",
            illustration: "/superlovely.jpg",
            helpText: "@GrapeDeanslist @_Dean_Machine u the man/men/ppl/pepes.",
        },
        {
            value: "lovely",
            heading: "lovely",
            illustration: "/lovely.png",
            helpText: "Sorry, @redacted_noah",
        },
        {
            value: "aggressive",
            heading: "Aggressive",
            illustration: "/aggressive.svg",
            helpText: "A curve with high price sensitivity. The price raises quickly when people buy, and lowers quickly when they sell. This is best suited for speculative use cases.",
        },
        {
            value: "stable",
            heading: "Stable",
            illustration: "/stable.svg",
            helpText: "A curve with medium price sensitivity. This curve changes price at a constant rate, achieving a balance between aggressive and utility curves.",
        },
        {
            value: "utility",
            heading: "Utility",
            illustration: "/utility.svg",
            helpText: "A curve with a price sensitivity that starts high and lowers with purchases. This curve is best suited for utility use cases, as it rewards early adopters and scales the supply so that the token can be exchanged for goods/services.",
        },
    ];
    if (first) {
        first = false;
        setValue("mint", mint);
    }
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
                    react_3.default.createElement(FormControlWithError_1.FormControlWithError, { id: "curveType", label: "Price Sensitivity", errors: errors },
                        react_3.default.createElement(react_1.Stack, Object.assign({}, group, { direction: { base: "column", md: "row" }, justifyContent: "center", alignItems: { base: "center", md: "normal" } }), curveOptions.map(({ value, heading, illustration, helpText }) => {
                            const radio = getRadioProps({ value });
                            return (react_3.default.createElement(RadioCard_1.RadioCardWithAffordance, Object.assign({ key: value }, radio),
                                react_3.default.createElement(react_1.Flex, { h: "full", direction: { base: "row", md: "column" }, textAlign: { base: "left", md: "center" } },
                                    react_3.default.createElement(react_1.Flex, { justifyContent: "center", alignItems: "center", flexShrink: 0 },
                                        react_3.default.createElement(react_1.Image, { src: illustration, alt: `${value}-illustration`, height: "70px", width: "100%" })),
                                    react_3.default.createElement(react_1.Flex, { flexGrow: 1, h: "full", direction: "column", alignItems: { base: "start", md: "center" }, justifyContent: { base: "center", md: "initial" } },
                                        react_3.default.createElement(react_1.Text, { fontWeight: "bold", fontSize: "md", pt: { base: 0, md: 4 } }, heading),
                                        react_3.default.createElement(react_1.Flex, { w: "full", flexGrow: { base: 0, md: 1 }, alignItems: { base: "start", md: "center" } },
                                            react_3.default.createElement(react_1.Text, { fontSize: "xs", color: "gray.500" }, helpText))))));
                        }))),
                    react_3.default.createElement(FormControlWithError_1.FormControlWithError, { id: "startingPrice", help: "The starting price of the token. The price will increase as more tokens are purchased", label: "Starting Price", errors: errors },
                        react_3.default.createElement(react_1.Input, Object.assign({ type: "number", min: 0, step: 0.0000000001 }, register("startingPrice")))),
                    react_3.default.createElement(FormControlWithError_1.FormControlWithError, { id: "isAntiBot", help: `Enable anti botting measures. This will keep bots from profiting by frontrunning your token while the price is low. Your tokens true pricing will take 2 hours to come into effect`, label: "Enable Anti Bot Measures?", errors: errors },
                        react_3.default.createElement(react_1.Switch, Object.assign({}, register("isAntiBot")))),
                    react_3.default.createElement(react_1.VStack, { align: "left", w: "full" },
                        react_3.default.createElement(react_1.Heading, { fontSize: "xl", mb: 4 }, "Royalties"),
                        react_3.default.createElement(react_1.HStack, null,
                            react_3.default.createElement(react_1.FormControl, { id: "buyTargetRoyaltyPercentage", borderColor: "gray.200" },
                                react_3.default.createElement(react_1.FormLabel, null,
                                    symbol || "Managed Token",
                                    " (Buy)"),
                                react_3.default.createElement(react_1.Input, Object.assign({ isRequired: true, type: "number", min: percentOr(tokenBondingSettings === null || tokenBondingSettings === void 0 ? void 0 : tokenBondingSettings.minBuyTargetRoyaltyPercentage, 0), max: percentOr(tokenBondingSettings === null || tokenBondingSettings === void 0 ? void 0 : tokenBondingSettings.maxBuyTargetRoyaltyPercentage, 100), placeholder: "2", defaultValue: 2, step: 0.00001 }, register("buyTargetRoyaltyPercentage")))),
                            react_3.default.createElement(react_1.FormControl, { id: "sellTargetRoyaltyPercentage", borderColor: "gray.200" },
                                react_3.default.createElement(react_1.FormLabel, null,
                                    symbol || "Managed Token",
                                    " (Sell)"),
                                react_3.default.createElement(react_1.Input, Object.assign({ isRequired: true, type: "number", min: percentOr(tokenBondingSettings === null || tokenBondingSettings === void 0 ? void 0 : tokenBondingSettings.minSellTargetRoyaltyPercentage, 0), max: percentOr(tokenBondingSettings === null || tokenBondingSettings === void 0 ? void 0 : tokenBondingSettings.maxSellTargetRoyaltyPercentage, 100), placeholder: "2", defaultValue: 2, step: 0.00001 }, register("sellTargetRoyaltyPercentage"))))),
                        react_3.default.createElement(react_1.HStack, null,
                            react_3.default.createElement(react_1.FormControl, { id: "buyBaseRoyaltyPercentage", borderColor: "gray.200" },
                                react_3.default.createElement(react_1.FormLabel, null,
                                    (baseMetadata === null || baseMetadata === void 0 ? void 0 : baseMetadata.data.symbol) || "Base Token",
                                    " (Buy)"),
                                react_3.default.createElement(react_1.Input, Object.assign({ isRequired: true, type: "number", min: percentOr(tokenBondingSettings === null || tokenBondingSettings === void 0 ? void 0 : tokenBondingSettings.minBuyBaseRoyaltyPercentage, 0), max: percentOr(tokenBondingSettings === null || tokenBondingSettings === void 0 ? void 0 : tokenBondingSettings.maxBuyBaseRoyaltyPercentage, 100), placeholder: "2", defaultValue: 2, step: 0.00001 }, register("buyBaseRoyaltyPercentage")))),
                            react_3.default.createElement(react_1.FormControl, { id: "sellBaseRoyaltyPercentage", borderColor: "gray.200" },
                                react_3.default.createElement(react_1.FormLabel, null,
                                    (baseMetadata === null || baseMetadata === void 0 ? void 0 : baseMetadata.data.symbol) || "Base Token",
                                    " (Sell)"),
                                react_3.default.createElement(react_1.Input, Object.assign({ isRequired: true, type: "number", min: percentOr(tokenBondingSettings === null || tokenBondingSettings === void 0 ? void 0 : tokenBondingSettings.minSellBaseRoyaltyPercentage, 0), max: percentOr(tokenBondingSettings === null || tokenBondingSettings === void 0 ? void 0 : tokenBondingSettings.maxSellBaseRoyaltyPercentage, 100), placeholder: "2", defaultValue: 2, step: 0.00001 }, register("sellBaseRoyaltyPercentage"))))),
                        react_3.default.createElement(react_1.FormControl, null,
                            react_3.default.createElement(react_1.FormHelperText, null, "A Percentage of coin buys/sales that will be sent to your wallet. We recommend to keep this less than a combined 10% for buys/sales."))),
                    react_3.default.createElement(Disclosures_1.Disclosures, { fees: 0 }),
                    react_3.default.createElement(react_1.Button, { type: "submit", alignSelf: "flex-end", colorScheme: "primary", isLoading: isSubmitting || loading, loadingText: awaitingApproval ? "Awaiting Approval" : "Loading" }, "Create Token"))))));
};
exports.FullyManagedForm = FullyManagedForm;
//# sourceMappingURL=FullyManagedForm.js.map