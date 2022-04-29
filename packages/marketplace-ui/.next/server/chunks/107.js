"use strict";
exports.id = 107;
exports.ids = [107];
exports.modules = {

/***/ 107:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ BountyForm)
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
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8847);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _strata_foundation_marketplace_sdk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4761);
/* harmony import */ var _strata_foundation_marketplace_sdk__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_marketplace_sdk__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_async_hook__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3188);
/* harmony import */ var react_async_hook__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_async_hook__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5641);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _contexts_marketplaceSdkContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9684);
/* harmony import */ var _FormControlWithError__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5109);
/* harmony import */ var _MintSelect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4948);
/* harmony import */ var _Recipient__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7892);
/* harmony import */ var _TokenMetadataInputs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8300);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MintSelect__WEBPACK_IMPORTED_MODULE_16__, _TokenMetadataInputs__WEBPACK_IMPORTED_MODULE_18__, react_hook_form__WEBPACK_IMPORTED_MODULE_12__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_6__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__]);
([_MintSelect__WEBPACK_IMPORTED_MODULE_16__, _TokenMetadataInputs__WEBPACK_IMPORTED_MODULE_18__, react_hook_form__WEBPACK_IMPORTED_MODULE_12__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_6__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



















const validationSchema = yup__WEBPACK_IMPORTED_MODULE_13__.object({
    mint: yup__WEBPACK_IMPORTED_MODULE_13__.string().required(),
    image: yup__WEBPACK_IMPORTED_MODULE_13__.mixed(),
    name: yup__WEBPACK_IMPORTED_MODULE_13__.string().required().min(2),
    description: yup__WEBPACK_IMPORTED_MODULE_13__.string(),
    shortName: yup__WEBPACK_IMPORTED_MODULE_13__.string().min(2).max(10),
    contact: yup__WEBPACK_IMPORTED_MODULE_13__.string(),
    discussion: yup__WEBPACK_IMPORTED_MODULE_13__.string(),
    authority: yup__WEBPACK_IMPORTED_MODULE_13__.string().required()
});
async function createBounty(marketplaceSdk, values) {
    const mint = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_7__.PublicKey(values.mint);
    const authority = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_7__.PublicKey(values.authority);
    const targetMintKeypair = _solana_web3_js__WEBPACK_IMPORTED_MODULE_7__.Keypair.generate();
    const uri = await marketplaceSdk.tokenMetadataSdk.uploadMetadata({
        provider: values.provider,
        name: values.name,
        symbol: values.shortName,
        description: values.description,
        image: values.image,
        mint: targetMintKeypair.publicKey,
        attributes: _strata_foundation_marketplace_sdk__WEBPACK_IMPORTED_MODULE_8__.MarketplaceSdk.bountyAttributes({
            mint,
            discussion: values.discussion,
            contact: values.contact
        })
    });
    const { targetMint  } = await marketplaceSdk.createBounty({
        targetMintKeypair,
        authority,
        metadataUpdateAuthority: marketplaceSdk.provider.wallet.publicKey,
        metadata: new _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_3__.DataV2({
            // Max name len 32
            name: values.name.substring(0, 32),
            symbol: values.shortName.substring(0, 10),
            uri,
            sellerFeeBasisPoints: 0,
            creators: null,
            collection: null,
            uses: null
        }),
        baseMint: mint
    });
    return targetMint;
}
const BountyForm = ({ defaultValues ={
} , onComplete , hide =new Set()  })=>{
    const formProps = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_12__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__.yupResolver)(validationSchema),
        defaultValues
    });
    const { register , handleSubmit , watch , setValue , formState: { errors , isSubmitting  } ,  } = formProps;
    const { publicKey , connected  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useWallet)();
    const { visible , setVisible  } = (0,_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_6__.useWalletModal)();
    const { info: tokenRef  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_9__.usePrimaryClaimedTokenRef)(publicKey);
    const { awaitingApproval  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_9__.useProvider)();
    const { execute , loading , error  } = (0,react_async_hook__WEBPACK_IMPORTED_MODULE_11__.useAsyncCallback)(createBounty);
    const { marketplaceSdk  } = (0,_contexts_marketplaceSdkContext__WEBPACK_IMPORTED_MODULE_14__/* .useMarketplaceSdk */ .T7)();
    const { authority , mint  } = watch();
    const mintKey1 = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_9__.usePublicKey)(mint);
    const { info: mintTokenRef  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_9__.useMintTokenRef)(mintKey1);
    // Social tokens should default bounties to the owner of the social token
    // as the authority. This is generally better because if the owner acts in
    // bad faith, they'll collapse the value of their own token. Vs a fan who can
    // easily not give money to the creator
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        if (!authority && mintTokenRef) {
            const owner = mintTokenRef.owner;
            if (owner) {
                setValue("authority", owner.toBase58());
            } else {
                setValue("authority", mintTokenRef.publicKey.toBase58());
            }
        }
    }, [
        mintTokenRef,
        authority,
        setValue
    ]);
    const onSubmit = async (values)=>{
        const mintKey = await execute(marketplaceSdk, values);
        onComplete && onComplete(mintKey);
    };
    const authorityRegister = register("authority");
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_12__.FormProvider, {
                ...formProps,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                    onSubmit: handleSubmit(onSubmit),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
                        spacing: 8,
                        mt: !connected ? 12 : 0,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TokenMetadataInputs__WEBPACK_IMPORTED_MODULE_18__/* .TokenMetadataInputs */ .c, {
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormControlWithError__WEBPACK_IMPORTED_MODULE_15__/* .FormControlWithError */ .H, {
                                id: "shortName",
                                help: "A less than 10 character name for this bounty. This will be the bounty token's symbol.",
                                label: "Short Name",
                                errors: errors,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                    ...register("shortName")
                                })
                            }),
                            !hide.has("mint") && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_FormControlWithError__WEBPACK_IMPORTED_MODULE_15__/* .FormControlWithError */ .H, {
                                id: "mint",
                                help: `The mint that should be used on this bounty, example ${_solana_spl_token__WEBPACK_IMPORTED_MODULE_4__.NATIVE_MINT.toBase58()} for SOL`,
                                label: "Mint",
                                errors: errors,
                                children: [
                                    tokenRef && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                        variant: "link",
                                        onClick: ()=>setValue("mint", tokenRef.mint.toBase58())
                                        ,
                                        children: "Use my Social Token"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MintSelect__WEBPACK_IMPORTED_MODULE_16__/* .MintSelect */ .J, {
                                        value: watch("mint"),
                                        onChange: (s)=>setValue("mint", s)
                                    })
                                ]
                            }),
                            !hide.has("authority") && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_FormControlWithError__WEBPACK_IMPORTED_MODULE_15__/* .FormControlWithError */ .H, {
                                id: "authority",
                                help: "The wallet that signs to disburse the funds of this bounty when it is completed. For social tokens, this defaults to the wallet associated with the social token. This can also be an SPL Governance address or a multisig.",
                                label: "Approver",
                                errors: errors,
                                children: [
                                    publicKey && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                        variant: "link",
                                        onClick: ()=>setValue("authority", publicKey.toBase58())
                                        ,
                                        children: "Set to My Wallet"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Recipient__WEBPACK_IMPORTED_MODULE_17__/* .Recipient */ .y, {
                                        name: authorityRegister.name,
                                        value: authority,
                                        onChange: authorityRegister.onChange
                                    })
                                ]
                            }),
                            !hide.has("contact") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormControlWithError__WEBPACK_IMPORTED_MODULE_15__/* .FormControlWithError */ .H, {
                                id: "contact",
                                help: "Who to contact regarding the bounty. This can be an email address, twitter handle, etc.",
                                label: "Contact Information",
                                errors: errors,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                    ...register("contact")
                                })
                            }),
                            !hide.has("discussion") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormControlWithError__WEBPACK_IMPORTED_MODULE_15__/* .FormControlWithError */ .H, {
                                id: "discussion",
                                help: "A link to where this bounty is actively being discussed. This can be a github issue, forum link, etc. Use this to coordinate the bounty.",
                                label: "Discussion",
                                errors: errors,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                    ...register("discussion")
                                })
                            }),
                            error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Alert, {
                                status: "error",
                                children: error.toString()
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                type: "submit",
                                alignSelf: "flex-end",
                                colorScheme: "primary",
                                isLoading: isSubmitting || loading,
                                loadingText: awaitingApproval ? "Awaiting Approval" : "Loading",
                                children: "Send Bounty"
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