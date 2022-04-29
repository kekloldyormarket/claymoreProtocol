"use strict";
exports.id = 43;
exports.ids = [43];
exports.modules = {

/***/ 1043:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ SaleForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1908);
/* harmony import */ var _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9817);
/* harmony import */ var _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9874);
/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_solana_spl_token__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1247);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _strata_foundation_marketplace_sdk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4761);
/* harmony import */ var _strata_foundation_marketplace_sdk__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_marketplace_sdk__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4022);
/* harmony import */ var _strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_async_hook__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3188);
/* harmony import */ var react_async_hook__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_async_hook__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5641);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _contexts_marketplaceSdkContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9684);
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(884);
/* harmony import */ var _Disclosures__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9227);
/* harmony import */ var _FormControlWithError__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5109);
/* harmony import */ var _MintSelect__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(4948);
/* harmony import */ var _TokenMetadataInputs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(8300);
/* harmony import */ var _UseExistingMintInputs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(6822);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(8847);
/* harmony import */ var _TokenMintDecimalsInputs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(9324);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Disclosures__WEBPACK_IMPORTED_MODULE_18__, _MintSelect__WEBPACK_IMPORTED_MODULE_20__, _TokenMintDecimalsInputs__WEBPACK_IMPORTED_MODULE_24__, _TokenMetadataInputs__WEBPACK_IMPORTED_MODULE_21__, _UseExistingMintInputs__WEBPACK_IMPORTED_MODULE_22__, react_hook_form__WEBPACK_IMPORTED_MODULE_13__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_23__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__]);
([_Disclosures__WEBPACK_IMPORTED_MODULE_18__, _MintSelect__WEBPACK_IMPORTED_MODULE_20__, _TokenMintDecimalsInputs__WEBPACK_IMPORTED_MODULE_24__, _TokenMetadataInputs__WEBPACK_IMPORTED_MODULE_21__, _UseExistingMintInputs__WEBPACK_IMPORTED_MODULE_22__, react_hook_form__WEBPACK_IMPORTED_MODULE_13__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_23__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);

























const validationSchema = yup__WEBPACK_IMPORTED_MODULE_15__.object({
    useExistingMint: yup__WEBPACK_IMPORTED_MODULE_15__.boolean(),
    existingMint: yup__WEBPACK_IMPORTED_MODULE_15__.string().when("useExistingMint", {
        is: true,
        then: yup__WEBPACK_IMPORTED_MODULE_15__.string().required()
    }),
    decimals: yup__WEBPACK_IMPORTED_MODULE_15__.number().nullable().transform((v)=>{
        return v === "" || isNaN(v) ? null : v;
    }).when("useExistingMint", {
        is: false,
        then: yup__WEBPACK_IMPORTED_MODULE_15__.number().min(0).required()
    }),
    mint: yup__WEBPACK_IMPORTED_MODULE_15__.string().required(),
    image: yup__WEBPACK_IMPORTED_MODULE_15__.mixed(),
    name: yup__WEBPACK_IMPORTED_MODULE_15__.string().when("useExistingMint", {
        is: false,
        then: yup__WEBPACK_IMPORTED_MODULE_15__.string().required().min(2)
    }),
    description: yup__WEBPACK_IMPORTED_MODULE_15__.string().when("useExistingMint", {
        is: false,
        then: yup__WEBPACK_IMPORTED_MODULE_15__.string().required().min(2)
    }),
    quantity: yup__WEBPACK_IMPORTED_MODULE_15__.number().required().min(1).integer(),
    price: yup__WEBPACK_IMPORTED_MODULE_15__.number().required().min(0),
    curve: yup__WEBPACK_IMPORTED_MODULE_15__.string(),
    disclosures: _Disclosures__WEBPACK_IMPORTED_MODULE_18__/* .disclosuresSchema */ ._,
    goLiveDate: yup__WEBPACK_IMPORTED_MODULE_15__.date().required()
});
async function createMarket(marketplaceSdk, values) {
    const mint = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.PublicKey(values.mint);
    const targetMintKeypair = _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.Keypair.generate();
    let metadata;
    if (values.useExistingMint) {
        const existingMint = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.PublicKey(values.existingMint);
        values.decimals = (await (0,_strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_9__.getMintInfo)(marketplaceSdk.provider, existingMint)).decimals;
        metadata = new _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_3__.DataV2({
            name: values.name || "",
            symbol: values.symbol || "",
            uri: values.uri || "",
            sellerFeeBasisPoints: 0,
            creators: null,
            collection: null,
            uses: null
        });
    } else {
        const uri = await marketplaceSdk.tokenMetadataSdk.uploadMetadata({
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
                    value: "true"
                }, 
            ]
        });
        metadata = new _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_3__.DataV2({
            // Max name len 32
            name: values.name.substring(0, 32),
            symbol: "",
            uri,
            sellerFeeBasisPoints: 0,
            creators: null,
            collection: null,
            uses: null
        });
    }
    const instructions = [];
    const signers = [];
    const marketItemInstrs = await marketplaceSdk.createMarketItemInstructions({
        targetMintKeypair,
        metadata,
        quantity: values.quantity,
        price: values.price,
        baseMint: mint,
        bondingArgs: {
            curve: values.curve ? new _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.PublicKey(values.curve) : undefined,
            targetMintDecimals: values.decimals,
            goLiveDate: values.goLiveDate
        }
    });
    instructions.push(...marketItemInstrs.instructions);
    signers.push(...marketItemInstrs.signers);
    if (values.useExistingMint) {
        const retrievalInstrs = await marketplaceSdk.createRetrievalCurveForSetSupplyInstructions({
            reserveAuthority: marketplaceSdk.provider.wallet.publicKey,
            supplyMint: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.PublicKey(values.existingMint),
            supplyAmount: values.quantity,
            targetMint: targetMintKeypair.publicKey
        });
        instructions.push(retrievalInstrs.instructions);
        signers.push(retrievalInstrs.signers);
    }
    await (0,_strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_9__.sendMultipleInstructions)(marketplaceSdk.tokenBondingSdk.errors || new Map(), marketplaceSdk.provider, instructions, signers);
    return targetMintKeypair.publicKey;
}
const SaleForm = ()=>{
    const formProps = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_13__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__.yupResolver)(validationSchema),
        defaultValues: {
            useExistingMint: true
        }
    });
    const { register , handleSubmit , setValue , formState: { errors , isSubmitting  } , watch ,  } = formProps;
    const { publicKey , connected  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useWallet)();
    const { visible , setVisible  } = (0,_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_23__.useWalletModal)();
    const { info: tokenRef  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_8__.usePrimaryClaimedTokenRef)(publicKey);
    const { awaitingApproval  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_8__.useProvider)();
    const { execute , loading , error  } = (0,react_async_hook__WEBPACK_IMPORTED_MODULE_12__.useAsyncCallback)(createMarket);
    const { marketplaceSdk  } = (0,_contexts_marketplaceSdkContext__WEBPACK_IMPORTED_MODULE_16__/* .useMarketplaceSdk */ .T7)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const { isOpen , onToggle  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure)();
    const onSubmit = async (values)=>{
        const mintKey = await execute(marketplaceSdk, values);
        router.push((0,_utils_routes__WEBPACK_IMPORTED_MODULE_17__/* .route */ .B)(values.decimals === 0 ? _utils_routes__WEBPACK_IMPORTED_MODULE_17__/* .routes.sale */ ._.sale : _utils_routes__WEBPACK_IMPORTED_MODULE_17__/* .routes.tokenOffering */ ._.tokenOffering, {
            mintKey: mintKey.toBase58()
        }), undefined, {
            shallow: true
        });
    };
    const useExistingMint = watch("useExistingMint");
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        position: "relative",
        children: [
            !connected && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                position: "absolute",
                w: "full",
                h: "full",
                zIndex: "1",
                flexDirection: "column",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        justifyContent: "center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            colorScheme: "orange",
                            variant: "outline",
                            onClick: ()=>setVisible(!visible)
                            ,
                            children: "Connect Wallet"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        w: "full",
                        h: "full",
                        bg: "white",
                        opacity: "0.6"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_13__.FormProvider, {
                ...formProps,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                    onSubmit: handleSubmit(onSubmit),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
                        spacing: 8,
                        mt: !connected ? 12 : 0,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UseExistingMintInputs__WEBPACK_IMPORTED_MODULE_22__/* .UseExistingMintInputs */ .g, {
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                w: "full",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Collapse, {
                                    in: !useExistingMint,
                                    animateOpacity: true,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
                                        spacing: 8,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TokenMetadataInputs__WEBPACK_IMPORTED_MODULE_21__/* .TokenMetadataInputs */ .c, {
                                                entityName: "token"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TokenMintDecimalsInputs__WEBPACK_IMPORTED_MODULE_24__/* .TokenMintDecimalsInputs */ .m, {
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormControlWithError__WEBPACK_IMPORTED_MODULE_19__/* .FormControlWithError */ .H, {
                                id: "quantity",
                                help: "The quantity to stop selling at",
                                label: "Quantity",
                                errors: errors,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                    type: "number",
                                    min: 1,
                                    step: 1,
                                    ...register("quantity")
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_FormControlWithError__WEBPACK_IMPORTED_MODULE_19__/* .FormControlWithError */ .H, {
                                id: "mint",
                                help: `The token that should be used to buy this token. If you want users to purchase your token using SOL, use ${_solana_spl_token__WEBPACK_IMPORTED_MODULE_4__.NATIVE_MINT.toBase58()}`,
                                label: "Purchase Mint",
                                errors: errors,
                                children: [
                                    tokenRef && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                        variant: "link",
                                        onClick: ()=>setValue("mint", tokenRef.mint.toBase58())
                                        ,
                                        children: "Use my Social Token"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MintSelect__WEBPACK_IMPORTED_MODULE_20__/* .MintSelect */ .J, {
                                        value: watch("mint"),
                                        onChange: (s)=>setValue("mint", s)
                                    }),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormControlWithError__WEBPACK_IMPORTED_MODULE_19__/* .FormControlWithError */ .H, {
                                id: "price",
                                help: "The price in terms of the Purchase Mint",
                                label: "Price",
                                errors: errors,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                    type: "number",
                                    min: 0,
                                    step: 0.0000000001,
                                    ...register("price")
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormControlWithError__WEBPACK_IMPORTED_MODULE_19__/* .FormControlWithError */ .H, {
                                id: "goLiveDate",
                                help: "The time this offering will go live, in your browser's local timezone",
                                label: "Launch Date",
                                errors: errors,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                    type: "datetime-local",
                                    ...register("goLiveDate")
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Disclosures__WEBPACK_IMPORTED_MODULE_18__/* .Disclosures */ .M, {
                                fees: _strata_foundation_marketplace_sdk__WEBPACK_IMPORTED_MODULE_7__.FIXED_CURVE_FEES
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                                alignItems: "flex-start",
                                direction: "column",
                                w: "full",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                        textAlign: "left",
                                        rightIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                            as: react_icons_bs__WEBPACK_IMPORTED_MODULE_14__.BsChevronDown
                                        }),
                                        variant: "link",
                                        onClick: onToggle,
                                        children: "Advanced Settings"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                        w: "full",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Collapse, {
                                            in: isOpen,
                                            animateOpacity: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormControlWithError__WEBPACK_IMPORTED_MODULE_19__/* .FormControlWithError */ .H, {
                                                id: "curve",
                                                help: "The pricing curve to use for this item",
                                                label: "Curve",
                                                errors: errors,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                                    ...register("curve")
                                                })
                                            })
                                        })
                                    })
                                ]
                            }),
                            error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Alert, {
                                status: "error",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Alert, {
                                    status: "error",
                                    children: error.toString()
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                type: "submit",
                                alignSelf: "flex-end",
                                colorScheme: "primary",
                                isLoading: isSubmitting || loading,
                                loadingText: awaitingApproval ? "Awaiting Approval" : "Loading",
                                children: "Create Sale"
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