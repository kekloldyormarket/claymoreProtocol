"use strict";
exports.id = 947;
exports.ids = [947];
exports.modules = {

/***/ 947:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ FullyManagedForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glasseaters_hydra_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2242);
/* harmony import */ var _glasseaters_hydra_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_glasseaters_hydra_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9817);
/* harmony import */ var _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1247);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _strata_foundation_spl_token_bonding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9587);
/* harmony import */ var _strata_foundation_spl_token_bonding__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_spl_token_bonding__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5641);
/* harmony import */ var _contexts_marketplaceSdkContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9684);
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(884);
/* harmony import */ var _FormControlWithError__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5109);
/* harmony import */ var _TokenMetadataInputs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8300);
/* harmony import */ var _Disclosures__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9227);
/* harmony import */ var _RadioCard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1031);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8847);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Disclosures__WEBPACK_IMPORTED_MODULE_15__, _TokenMetadataInputs__WEBPACK_IMPORTED_MODULE_14__, react_hook_form__WEBPACK_IMPORTED_MODULE_10__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_17__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__]);
([_Disclosures__WEBPACK_IMPORTED_MODULE_15__, _TokenMetadataInputs__WEBPACK_IMPORTED_MODULE_14__, react_hook_form__WEBPACK_IMPORTED_MODULE_10__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_17__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


















var first = true;
const clayMint = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_5__.PublicKey("12yd5cGsGeBEDJzzRxKfSttGB4bbA7oY4frEBBsiUwiq") //"91CeYr7diK3GmyiYLG4WtX1H9qRjdeMEnmw8uSSF9ZAz")
;
var tokenCollectiveSdk2;
var tokenBondingSdk2;
const FullyManagedForm = ()=>{
    const formProps = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_10__.useForm)({
        defaultValues: {
            disclosures: {
                acceptedFees: true
            }
        }
    });
    const { register , handleSubmit , setValue , formState: { errors , isSubmitting  } , watch ,  } = formProps;
    var wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useWallet)();
    var connected = wallet.connected;
    var publicKey = wallet.publicKey;
    const { visible , setVisible  } = (0,_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_17__.useWalletModal)();
    const { awaitingApproval  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_6__.useProvider)();
    var { tokenCollectiveSdk: tokenCollectiveSdk1 , tokenBondingSdk: tokenBondingSdk1 , loading: eh  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_6__.useStrataSdks)();
    if (!eh) {
        tokenCollectiveSdk2 = tokenCollectiveSdk1;
        tokenBondingSdk2 = tokenBondingSdk1;
    }
    const { marketplaceSdk , loading  } = (0,_contexts_marketplaceSdkContext__WEBPACK_IMPORTED_MODULE_11__/* .useMarketplaceSdk */ .T7)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    function percentOr(percentu32, def) {
        return percentu32 ? Number((0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_6__.humanReadablePercentage)(percentu32)) : def;
    }
    var values1;
    var wallet;
    var connection;
    const onSubmit = async (values)=>{
        console.log(values);
        if (marketplaceSdk) {
            const mint = clayMint;
            const tokenCollectiveSdk = marketplaceSdk.tokenCollectiveSdk;
            const tokenBondingSdk = tokenCollectiveSdk.splTokenBondingProgram;
            const targetMintKeypair = _solana_web3_js__WEBPACK_IMPORTED_MODULE_5__.Keypair.generate();
            let k = 0;
            switch(values.curveType){
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
            let config = new _strata_foundation_spl_token_bonding__WEBPACK_IMPORTED_MODULE_7__.TimeDecayExponentialCurveConfig({
                c: Math.ceil(values.startingPrice * 10 ** 2),
                k0: k,
                k1: k,
                d: 1,
                interval: 2 * 60 * 60
            });
            if (values.isAntiBot) {
                config = new _strata_foundation_spl_token_bonding__WEBPACK_IMPORTED_MODULE_7__.TimeCurveConfig().addCurve(0, new _strata_foundation_spl_token_bonding__WEBPACK_IMPORTED_MODULE_7__.TimeDecayExponentialCurveConfig({
                    c: Math.ceil(values.startingPrice * 10 ** 2),
                    k0: 0,
                    k1: 0,
                    d: 1,
                    interval: 0
                })).addCurve(30 * 60, new _strata_foundation_spl_token_bonding__WEBPACK_IMPORTED_MODULE_7__.TimeDecayExponentialCurveConfig({
                    c: Math.ceil(values.startingPrice * 10 ** 2),
                    k0: 0,
                    k1: k,
                    d: 0.5,
                    interval: 1.5 * 60 * 60
                }));
            }
            var curve = await tokenBondingSdk.initializeCurve({
                config
            });
            const bondingOpts = {
                baseMint: mint,
                buyBaseRoyaltyPercentage: values.buyBaseRoyaltyPercentage,
                buyTargetRoyaltyPercentage: values.buyTargetRoyaltyPercentage,
                sellBaseRoyaltyPercentage: values.sellBaseRoyaltyPercentage,
                sellTargetRoyaltyPercentage: values.sellTargetRoyaltyPercentage,
                curve: curve,
                targetMint: targetMintKeypair.publicKey,
                targetMintDecimals: 2
            };
            const uri = await tokenCollectiveSdk.splTokenMetadata.uploadMetadata({
                provider: values.provider,
                name: values.name,
                symbol: values.symbol,
                description: values.description,
                image: values.image,
                mint: targetMintKeypair.publicKey
            });
            const metadata = new _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_3__.DataV2({
                // Max name len 32
                name: values.name.substring(0, 32),
                symbol: values.symbol.substring(0, 10),
                uri,
                sellerFeeBasisPoints: 0,
                creators: null,
                collection: null,
                uses: null
            });
            const { ownerTokenRef  } = await tokenCollectiveSdk.createSocialToken({
                mint,
                tokenBondingParams: bondingOpts,
                owner: tokenCollectiveSdk.wallet.publicKey,
                targetMintKeypair,
                metadata
            });
            var fanoutSdk = new _glasseaters_hydra_sdk__WEBPACK_IMPORTED_MODULE_1__.FanoutClient(new _solana_web3_js__WEBPACK_IMPORTED_MODULE_5__.Connection("https://ssc-dao.genesysgo.net/"), // @ts-ignore
            wallet);
            //const supply = 1000000 * 10 ** 6;
            //const tokenAcct = await membershipMint.createAccount(
            //  authorityWallet.publicKey
            //);
            const { fanout  } = await fanoutSdk.initializeFanout({
                totalShares: 0,
                name: `Boom` + Math.floor(Math.random() * 999999).toString(),
                membershipModel: _glasseaters_hydra_sdk__WEBPACK_IMPORTED_MODULE_1__.MembershipModel.Token,
                mint: targetMintKeypair.publicKey
            });
            console.log(fanout.toBase58());
            const { tokenAccount: target  } = await fanoutSdk.initializeFanoutForMint({
                fanout,
                mint: targetMintKeypair.publicKey
            });
            const { tokenAccount: base  } = await fanoutSdk.initializeFanoutForMint({
                fanout,
                mint: clayMint
            });
            var bt = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_5__.PublicKey("2vnUcuspVcejUTc5x45MM2EUbfivBDhcAJF3oWgZ9wsE");
            // @ts-ignore
            if (tokenBondingSdk2 && tokenCollectiveSdk2) {
                // @ts-ignore
                var lala = await tokenCollectiveSdk2.updateTokenBondingInstructions({
                    // so this is going to need to be tokenRefKey, and not this
                    ownerTokenRef: ownerTokenRef,
                    buyTargetRoyalties: target,
                    sellTargetRoyalties: base,
                    buyBaseRoyalties: bt,
                    sellBaseRoyalties: base
                });
                // @ts-ignore
                await tokenCollectiveSdk2.sendInstructions(lala.instructions, lala.signers);
            }
            console.log([
                targetMintKeypair.publicKey,
                fanout
            ]);
            router.push((0,_utils_routes__WEBPACK_IMPORTED_MODULE_12__/* .route */ .B)(_utils_routes__WEBPACK_IMPORTED_MODULE_12__/* .routes.swap */ ._.swap, {
                mintKey: targetMintKeypair.publicKey.toBase58(),
                fanoutKey: fanout.toBase58()
            }), undefined, {
                shallow: true
            });
        }
    };
    const { name ="" , symbol ="" , isSocial , mint: mint1 , curveType  } = watch();
    const mintKey = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_6__.usePublicKey)(mint1);
    const collectiveKey = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_6__.usePublicKey)("E5kLYTP6NfmravmLpYtA65HUgXK51X5c1gwu7Fhwd7nd");
    /*Async(
    async (mint: string | undefined) =>
      mint ? SplTokenCollective.collectiveKey(new PublicKey(mint)) : undefined,
    [mint]
  );*/ const { info: collective  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_6__.useCollective)(collectiveKey) // && collectiveKey[0]);
    ;
    console.log(collective);
    const tokenBondingSettings = collective === null || collective === void 0 ? void 0 : collective.config.claimedTokenBondingSettings;
    const { metadata: baseMetadata , error: baseMetadataError , loading: baseMetadataLoading ,  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_6__.useTokenMetadata)(mintKey);
    const { getRootProps , getRadioProps  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useRadioGroup)({
        name: "curveType",
        onChange: (option)=>setValue("curveType", option)
    });
    const group = getRootProps();
    const curveOptions = [
        {
            value: "superlovely",
            heading: "superlovely",
            illustration: "/superlovely.jpg",
            helpText: "@GrapeDeanslist @_Dean_Machine u the man/men/ppl/pepes."
        },
        {
            value: "lovely",
            heading: "lovely",
            illustration: "/lovely.png",
            helpText: "Sorry, @redacted_noah"
        },
        {
            value: "aggressive",
            heading: "Aggressive",
            illustration: "/aggressive.svg",
            helpText: "A curve with high price sensitivity. The price raises quickly when people buy, and lowers quickly when they sell. This is best suited for speculative use cases."
        },
        {
            value: "stable",
            heading: "Stable",
            illustration: "/stable.svg",
            helpText: "A curve with medium price sensitivity. This curve changes price at a constant rate, achieving a balance between aggressive and utility curves."
        },
        {
            value: "utility",
            heading: "Utility",
            illustration: "/utility.svg",
            helpText: "A curve with a price sensitivity that starts high and lowers with purchases. This curve is best suited for utility use cases, as it rewards early adopters and scales the supply so that the token can be exchanged for goods/services."
        }, 
    ];
    if (first) {
        first = false;
        setValue("mint", mint1);
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
        position: "relative",
        children: [
            !connected && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                position: "absolute",
                w: "full",
                h: "full",
                zIndex: "1",
                flexDirection: "column",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                        justifyContent: "center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            colorScheme: "orange",
                            variant: "outline",
                            onClick: ()=>setVisible(!visible)
                            ,
                            children: "Connect Wallet"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                        w: "full",
                        h: "full",
                        bg: "white",
                        opacity: "0.6"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_10__.FormProvider, {
                ...formProps,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                    onSubmit: handleSubmit(onSubmit),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
                        spacing: 8,
                        mt: !connected ? 12 : 0,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TokenMetadataInputs__WEBPACK_IMPORTED_MODULE_14__/* .TokenMetadataInputs */ .c, {
                                entityName: "token"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormControlWithError__WEBPACK_IMPORTED_MODULE_13__/* .FormControlWithError */ .H, {
                                id: "symbol",
                                help: "The symbol for this token, ex: SOL",
                                label: "Symbol",
                                errors: errors,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                    ...register("symbol")
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormControlWithError__WEBPACK_IMPORTED_MODULE_13__/* .FormControlWithError */ .H, {
                                id: "curveType",
                                label: "Price Sensitivity",
                                errors: errors,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                    ...group,
                                    direction: {
                                        base: "column",
                                        md: "row"
                                    },
                                    justifyContent: "center",
                                    alignItems: {
                                        base: "center",
                                        md: "normal"
                                    },
                                    children: curveOptions.map(({ value , heading , illustration , helpText  })=>{
                                        const radio = getRadioProps({
                                            value
                                        });
                                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RadioCard__WEBPACK_IMPORTED_MODULE_16__/* .RadioCardWithAffordance */ .b, {
                                            ...radio,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                                                h: "full",
                                                direction: {
                                                    base: "row",
                                                    md: "column"
                                                },
                                                textAlign: {
                                                    base: "left",
                                                    md: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        flexShrink: 0,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                                                            src: illustration,
                                                            alt: `${value}-illustration`,
                                                            height: "70px",
                                                            width: "100%"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                                                        flexGrow: 1,
                                                        h: "full",
                                                        direction: "column",
                                                        alignItems: {
                                                            base: "start",
                                                            md: "center"
                                                        },
                                                        justifyContent: {
                                                            base: "center",
                                                            md: "initial"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                                fontWeight: "bold",
                                                                fontSize: "md",
                                                                pt: {
                                                                    base: 0,
                                                                    md: 4
                                                                },
                                                                children: heading
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                                                                w: "full",
                                                                flexGrow: {
                                                                    base: 0,
                                                                    md: 1
                                                                },
                                                                alignItems: {
                                                                    base: "start",
                                                                    md: "center"
                                                                },
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                                    fontSize: "xs",
                                                                    color: "gray.500",
                                                                    children: helpText
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, value));
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormControlWithError__WEBPACK_IMPORTED_MODULE_13__/* .FormControlWithError */ .H, {
                                id: "startingPrice",
                                help: "The starting price of the token. The price will increase as more tokens are purchased",
                                label: "Starting Price",
                                errors: errors,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                    type: "number",
                                    min: 0,
                                    step: 0.0000000001,
                                    ...register("startingPrice")
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormControlWithError__WEBPACK_IMPORTED_MODULE_13__/* .FormControlWithError */ .H, {
                                id: "isAntiBot",
                                help: `Enable anti botting measures. This will keep bots from profiting by frontrunning your token while the price is low. Your tokens true pricing will take 2 hours to come into effect`,
                                label: "Enable Anti Bot Measures?",
                                errors: errors,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Switch, {
                                    ...register("isAntiBot")
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
                                align: "left",
                                w: "full",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
                                        fontSize: "xl",
                                        mb: 4,
                                        children: "Royalties"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                                                id: "buyTargetRoyaltyPercentage",
                                                borderColor: "gray.200",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
                                                        children: [
                                                            symbol || "Managed Token",
                                                            " (Buy)"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                                        isRequired: true,
                                                        type: "number",
                                                        min: percentOr(tokenBondingSettings === null || tokenBondingSettings === void 0 ? void 0 : tokenBondingSettings.minBuyTargetRoyaltyPercentage, 0),
                                                        max: percentOr(tokenBondingSettings === null || tokenBondingSettings === void 0 ? void 0 : tokenBondingSettings.maxBuyTargetRoyaltyPercentage, 100),
                                                        placeholder: "2",
                                                        defaultValue: 2,
                                                        step: 0.00001,
                                                        ...register("buyTargetRoyaltyPercentage")
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                                                id: "sellTargetRoyaltyPercentage",
                                                borderColor: "gray.200",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
                                                        children: [
                                                            symbol || "Managed Token",
                                                            " (Sell)"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                                        isRequired: true,
                                                        type: "number",
                                                        min: percentOr(tokenBondingSettings === null || tokenBondingSettings === void 0 ? void 0 : tokenBondingSettings.minSellTargetRoyaltyPercentage, 0),
                                                        max: percentOr(tokenBondingSettings === null || tokenBondingSettings === void 0 ? void 0 : tokenBondingSettings.maxSellTargetRoyaltyPercentage, 100),
                                                        placeholder: "2",
                                                        defaultValue: 2,
                                                        step: 0.00001,
                                                        ...register("sellTargetRoyaltyPercentage")
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                                                id: "buyBaseRoyaltyPercentage",
                                                borderColor: "gray.200",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
                                                        children: [
                                                            (baseMetadata === null || baseMetadata === void 0 ? void 0 : baseMetadata.data.symbol) || "Base Token",
                                                            " (Buy)"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                                        isRequired: true,
                                                        type: "number",
                                                        min: percentOr(tokenBondingSettings === null || tokenBondingSettings === void 0 ? void 0 : tokenBondingSettings.minBuyBaseRoyaltyPercentage, 0),
                                                        max: percentOr(tokenBondingSettings === null || tokenBondingSettings === void 0 ? void 0 : tokenBondingSettings.maxBuyBaseRoyaltyPercentage, 100),
                                                        placeholder: "2",
                                                        defaultValue: 2,
                                                        step: 0.00001,
                                                        ...register("buyBaseRoyaltyPercentage")
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                                                id: "sellBaseRoyaltyPercentage",
                                                borderColor: "gray.200",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
                                                        children: [
                                                            (baseMetadata === null || baseMetadata === void 0 ? void 0 : baseMetadata.data.symbol) || "Base Token",
                                                            " (Sell)"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                                        isRequired: true,
                                                        type: "number",
                                                        min: percentOr(tokenBondingSettings === null || tokenBondingSettings === void 0 ? void 0 : tokenBondingSettings.minSellBaseRoyaltyPercentage, 0),
                                                        max: percentOr(tokenBondingSettings === null || tokenBondingSettings === void 0 ? void 0 : tokenBondingSettings.maxSellBaseRoyaltyPercentage, 100),
                                                        placeholder: "2",
                                                        defaultValue: 2,
                                                        step: 0.00001,
                                                        ...register("sellBaseRoyaltyPercentage")
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormHelperText, {
                                            children: "A Percentage of coin buys/sales that will be sent to your wallet. We recommend to keep this less than a combined 10% for buys/sales."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Disclosures__WEBPACK_IMPORTED_MODULE_15__/* .Disclosures */ .M, {
                                fees: 0
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                type: "submit",
                                alignSelf: "flex-end",
                                colorScheme: "primary",
                                isLoading: isSubmitting || loading,
                                loadingText: awaitingApproval ? "Awaiting Approval" : "Loading",
                                children: "Create Token"
                            })
                        ]
                    })
                })
            })
        ]
    }));
};

});

/***/ })

};
;