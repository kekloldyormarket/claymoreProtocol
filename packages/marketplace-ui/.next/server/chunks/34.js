"use strict";
exports.id = 34;
exports.ids = [34];
exports.modules = {

/***/ 2034:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ ManualForm)
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
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4022);
/* harmony import */ var _strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_async_hook__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3188);
/* harmony import */ var react_async_hook__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_async_hook__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5641);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(884);
/* harmony import */ var _FormControlWithError__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5109);
/* harmony import */ var _TokenMetadataInputs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8300);
/* harmony import */ var _TokenMintDecimalsInputs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9324);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1247);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8847);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TokenMintDecimalsInputs__WEBPACK_IMPORTED_MODULE_16__, _TokenMetadataInputs__WEBPACK_IMPORTED_MODULE_15__, react_hook_form__WEBPACK_IMPORTED_MODULE_11__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_18__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_17__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__]);
([_TokenMintDecimalsInputs__WEBPACK_IMPORTED_MODULE_16__, _TokenMetadataInputs__WEBPACK_IMPORTED_MODULE_15__, react_hook_form__WEBPACK_IMPORTED_MODULE_11__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_18__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_17__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



















const validationSchema = yup__WEBPACK_IMPORTED_MODULE_12__.object({
    image: yup__WEBPACK_IMPORTED_MODULE_12__.mixed(),
    name: yup__WEBPACK_IMPORTED_MODULE_12__.string().required().min(2),
    description: yup__WEBPACK_IMPORTED_MODULE_12__.string().required().min(2),
    symbol: yup__WEBPACK_IMPORTED_MODULE_12__.string().required().min(2),
    supply: yup__WEBPACK_IMPORTED_MODULE_12__.number().required().min(0),
    keepMintAuthority: yup__WEBPACK_IMPORTED_MODULE_12__.boolean(),
    keepFreezeAuthority: yup__WEBPACK_IMPORTED_MODULE_12__.boolean(),
    decimals: yup__WEBPACK_IMPORTED_MODULE_12__.number().required()
});
async function createFullyManaged(tokenMetadataSdk, values) {
    const targetMintKeypair = _solana_web3_js__WEBPACK_IMPORTED_MODULE_5__.Keypair.generate();
    const targetMint = targetMintKeypair.publicKey;
    const me = tokenMetadataSdk.provider.wallet.publicKey;
    const instructions = await (0,_strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_7__.createMintInstructions)(tokenMetadataSdk.provider, me, targetMintKeypair.publicKey, values.decimals, values.keepFreezeAuthority ? me : undefined);
    const signers = [
        targetMintKeypair
    ];
    const uri = await tokenMetadataSdk.uploadMetadata({
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
    const { instructions: metadataInstructions , signers: metadataSigners , output ,  } = await tokenMetadataSdk.createMetadataInstructions({
        data: metadata,
        mint: targetMint,
        mintAuthority: me,
        authority: me
    });
    instructions.push(...metadataInstructions);
    signers.push(...metadataSigners);
    const ata = await _solana_spl_token__WEBPACK_IMPORTED_MODULE_4__.Token.getAssociatedTokenAddress(_solana_spl_token__WEBPACK_IMPORTED_MODULE_4__.ASSOCIATED_TOKEN_PROGRAM_ID, _solana_spl_token__WEBPACK_IMPORTED_MODULE_4__.TOKEN_PROGRAM_ID, targetMint, me, true);
    instructions.push(_solana_spl_token__WEBPACK_IMPORTED_MODULE_4__.Token.createAssociatedTokenAccountInstruction(_solana_spl_token__WEBPACK_IMPORTED_MODULE_4__.ASSOCIATED_TOKEN_PROGRAM_ID, _solana_spl_token__WEBPACK_IMPORTED_MODULE_4__.TOKEN_PROGRAM_ID, targetMint, ata, me, me), _solana_spl_token__WEBPACK_IMPORTED_MODULE_4__.Token.createMintToInstruction(_solana_spl_token__WEBPACK_IMPORTED_MODULE_4__.TOKEN_PROGRAM_ID, targetMint, ata, me, [], new _solana_spl_token__WEBPACK_IMPORTED_MODULE_4__.u64((values.supply * Math.pow(10, values.decimals)).toLocaleString("fullwide", {
        useGrouping: false
    }))));
    if (!values.keepMintAuthority) {
        instructions.push(_solana_spl_token__WEBPACK_IMPORTED_MODULE_4__.Token.createSetAuthorityInstruction(_solana_spl_token__WEBPACK_IMPORTED_MODULE_4__.TOKEN_PROGRAM_ID, targetMint, null, "MintTokens", me, []));
    }
    await (0,_strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_7__.sendInstructions)(new Map(), tokenMetadataSdk.provider, instructions, signers, me);
    return targetMintKeypair.publicKey;
}
const ManualForm = ()=>{
    const formProps = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_11__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__.yupResolver)(validationSchema)
    });
    const { register , handleSubmit , formState: { errors , isSubmitting  } ,  } = formProps;
    const { connected  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_17__.useWallet)();
    const { visible , setVisible  } = (0,_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_18__.useWalletModal)();
    const { awaitingApproval  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_6__.useProvider)();
    const { execute , loading , error  } = (0,react_async_hook__WEBPACK_IMPORTED_MODULE_10__.useAsyncCallback)(createFullyManaged);
    const { tokenMetadataSdk  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_6__.useStrataSdks)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const onSubmit = async (values)=>{
        const mintKey = await execute(tokenMetadataSdk, values);
        router.push((0,_utils_routes__WEBPACK_IMPORTED_MODULE_13__/* .route */ .B)(_utils_routes__WEBPACK_IMPORTED_MODULE_13__/* .routes.sell */ ._.sell, {
            mint: mintKey.toBase58()
        }), undefined, {
            shallow: true
        });
    };
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_11__.FormProvider, {
                ...formProps,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                    onSubmit: handleSubmit(onSubmit),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
                        spacing: 8,
                        mt: !connected ? 12 : 0,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TokenMetadataInputs__WEBPACK_IMPORTED_MODULE_15__/* .TokenMetadataInputs */ .c, {
                                entityName: "token"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormControlWithError__WEBPACK_IMPORTED_MODULE_14__/* .FormControlWithError */ .H, {
                                id: "symbol",
                                help: "The symbol for this token, ex: SOL",
                                label: "Symbol",
                                errors: errors,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                    ...register("symbol")
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TokenMintDecimalsInputs__WEBPACK_IMPORTED_MODULE_16__/* .TokenMintDecimalsInputs */ .m, {
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormControlWithError__WEBPACK_IMPORTED_MODULE_14__/* .FormControlWithError */ .H, {
                                id: "supply",
                                help: "The number of tokens to mint. After creation these will be available in your wallet",
                                label: "Supply",
                                errors: errors,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.NumberInput, {
                                    precision: 0,
                                    step: 1,
                                    min: 1,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.NumberInputField, {
                                        ...register("supply")
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormControlWithError__WEBPACK_IMPORTED_MODULE_14__/* .FormControlWithError */ .H, {
                                id: "keepMintAuthority",
                                help: `Would you like the ability to mint more than the specified supply of tokens?`,
                                label: "Keep Mint Authority?",
                                errors: errors,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Switch, {
                                    ...register("keepMintAuthority")
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormControlWithError__WEBPACK_IMPORTED_MODULE_14__/* .FormControlWithError */ .H, {
                                id: "keepFreezeAuthority",
                                help: `Would you like the ability to freeze token accounts using this token, so that they may no longer be used.`,
                                label: "Keep Freeze Authority?",
                                errors: errors,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Switch, {
                                    ...register("keepFreezeAuthority")
                                })
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