"use strict";
exports.id = 830;
exports.ids = [830];
exports.modules = {

/***/ 4830:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ EditBountyForm)
/* harmony export */ });
/* unused harmony export EditBountyFormRaw */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1908);
/* harmony import */ var _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9817);
/* harmony import */ var _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1247);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _strata_foundation_marketplace_sdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4761);
/* harmony import */ var _strata_foundation_marketplace_sdk__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_marketplace_sdk__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _strata_foundation_spl_token_bonding__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9587);
/* harmony import */ var _strata_foundation_spl_token_bonding__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_spl_token_bonding__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4022);
/* harmony import */ var _strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_async_hook__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3188);
/* harmony import */ var react_async_hook__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_async_hook__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5641);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _FormControlWithError__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5109);
/* harmony import */ var _Recipient__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7892);
/* harmony import */ var _TokenMetadataInputs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8300);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TokenMetadataInputs__WEBPACK_IMPORTED_MODULE_17__, react_hook_form__WEBPACK_IMPORTED_MODULE_13__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__]);
([_TokenMetadataInputs__WEBPACK_IMPORTED_MODULE_17__, react_hook_form__WEBPACK_IMPORTED_MODULE_13__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


















const validationSchema = yup__WEBPACK_IMPORTED_MODULE_14__.object({
    image: yup__WEBPACK_IMPORTED_MODULE_14__.mixed(),
    name: yup__WEBPACK_IMPORTED_MODULE_14__.string().required().min(2),
    description: yup__WEBPACK_IMPORTED_MODULE_14__.string(),
    shortName: yup__WEBPACK_IMPORTED_MODULE_14__.string().min(2).max(10),
    contact: yup__WEBPACK_IMPORTED_MODULE_14__.string(),
    discussion: yup__WEBPACK_IMPORTED_MODULE_14__.string(),
    authority: yup__WEBPACK_IMPORTED_MODULE_14__.string().required()
});
async function editBounty(tokenMetadataSdk, tokenBondingSdk, values, mintKey) {
    const uri = await tokenMetadataSdk.uploadMetadata({
        provider: values.provider,
        name: values.name,
        symbol: values.shortName,
        description: values.description,
        image: values.image,
        mint: mintKey,
        attributes: _strata_foundation_marketplace_sdk__WEBPACK_IMPORTED_MODULE_6__.MarketplaceSdk.bountyAttributes({
            mint: mintKey,
            discussion: values.discussion,
            contact: values.contact
        })
    });
    const instructions = [];
    const signers = [];
    const { instructions: metaInstrs , signers: metaSigners  } = await tokenMetadataSdk.updateMetadataInstructions({
        metadata: await _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_3__.Metadata.getPDA(mintKey),
        data: new _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_3__.DataV2({
            // Max name len 32
            name: values.name.substring(0, 32),
            symbol: values.shortName.substring(0, 10),
            uri,
            sellerFeeBasisPoints: 0,
            creators: null,
            collection: null,
            uses: null
        })
    });
    instructions.push(...metaInstrs);
    signers.push(...metaSigners);
    const tokenBondingKey = (await _strata_foundation_spl_token_bonding__WEBPACK_IMPORTED_MODULE_8__.SplTokenBonding.tokenBondingKey(mintKey))[0];
    const tokenBondingAcct = await tokenBondingSdk.getTokenBonding(tokenBondingKey);
    if (values.authority && tokenBondingSdk.wallet.publicKey.equals(tokenBondingAcct.reserveAuthority)) {
        const authority = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_5__.PublicKey(values.authority);
        const { instructions: bondInstrs , signers: bondSigners  } = await tokenBondingSdk.updateTokenBondingInstructions({
            tokenBonding: tokenBondingKey,
            generalAuthority: authority,
            reserveAuthority: authority
        });
        instructions.push(...bondInstrs);
        signers.push(...bondSigners);
    }
    await tokenBondingSdk.sendInstructions(instructions, signers);
    return mintKey;
}
const EditBountyFormRaw = ({ mintKey , values: values1 , onComplete , hide =new Set()  })=>{
    const formProps = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_13__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__.yupResolver)(validationSchema),
        defaultValues: values1
    });
    const { register , handleSubmit , watch , setValue , formState: { errors , isSubmitting  } ,  } = formProps;
    const { publicKey  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useWallet)();
    const { awaitingApproval  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_7__.useProvider)();
    const { execute , loading , error  } = (0,react_async_hook__WEBPACK_IMPORTED_MODULE_12__.useAsyncCallback)(editBounty);
    const { tokenMetadataSdk , tokenBondingSdk  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_7__.useStrataSdks)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const authority = watch("authority");
    const onSubmit = async (values)=>{
        await execute(tokenMetadataSdk, tokenBondingSdk, values, mintKey);
        onComplete && onComplete();
    };
    const authorityRegister = register("authority");
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_13__.FormProvider, {
        ...formProps,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
            onSubmit: handleSubmit(onSubmit),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
                spacing: 8,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TokenMetadataInputs__WEBPACK_IMPORTED_MODULE_17__/* .TokenMetadataInputs */ .c, {
                    }),
                    !hide.has("shortName") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormControlWithError__WEBPACK_IMPORTED_MODULE_15__/* .FormControlWithError */ .H, {
                        id: "shortName",
                        help: "A less than 10 character name for this bounty. This will be the bounty token's symbol.",
                        label: "Short Name",
                        errors: errors,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                            ...register("shortName")
                        })
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Recipient__WEBPACK_IMPORTED_MODULE_16__/* .Recipient */ .y, {
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
    }));
};
const getFileFromUrl = async (url, name, defaultType = "image/jpeg")=>{
    if (!url) {
        return undefined;
    }
    const data = await fetch(url, {
        cache: "no-cache"
    });
    const blob = await data.blob();
    const fileName = `${name}${blob.type === defaultType ? ".jpeg" : "png"}`;
    const file = new File([
        blob
    ], fileName, {
        type: blob.type || defaultType
    });
    return file;
};
const EditBountyForm = ({ mintKey , onComplete , hide =new Set()  })=>{
    const { info: tokenBonding , loading: loadingBonding  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_7__.useTokenBondingFromMint)(mintKey);
    const { displayName , image , metadata , data , loading: loadingMetadata ,  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_7__.useTokenMetadata)(mintKey);
    const { result: file , loading  } = (0,react_async_hook__WEBPACK_IMPORTED_MODULE_12__.useAsync)(getFileFromUrl, [
        image,
        "image"
    ]);
    const attributes = react__WEBPACK_IMPORTED_MODULE_11___default().useMemo(()=>{
        return _strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_9__.SplTokenMetadata.attributesToRecord(data === null || data === void 0 ? void 0 : data.attributes);
    }, [
        data
    ]);
    if (loadingBonding || loadingMetadata || loading || !tokenBonding || !metadata) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Spinner, {
            })
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EditBountyFormRaw, {
        hide: new Set([
            "contact",
            "discussion"
        ]),
        onComplete: onComplete,
        mintKey: mintKey,
        values: {
            authority: tokenBonding.reserveAuthority.toBase58(),
            name: displayName,
            image: file,
            description: data === null || data === void 0 ? void 0 : data.description,
            shortName: metadata === null || metadata === void 0 ? void 0 : metadata.data.symbol,
            contact: attributes === null || attributes === void 0 ? void 0 : attributes.contact,
            discussion: attributes === null || attributes === void 0 ? void 0 : attributes.discussion
        }
    }));
};

});

/***/ })

};
;