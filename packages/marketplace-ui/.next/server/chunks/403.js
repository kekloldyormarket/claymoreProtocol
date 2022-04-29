"use strict";
exports.id = 403;
exports.ids = [403];
exports.modules = {

/***/ 8189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ AuthorityAndTokenInfo)
/* harmony export */ });
/* unused harmony export InfoItem */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__);




const onCreatorClick = (c, t, tokenRef, handle)=>{
    window.open(tokenRef ? `https://wum.bo/app/profile/view/${tokenRef.mint}` : handle ? `https://twitter.com/${handle}` : `https://explorer.solana.com/address/${c.toBase58()}`, "_blank");
};
const InfoItem = ({ name , creator , loading  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
        spacing: 2,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                fontWeight: 800,
                color: "gray.700",
                children: [
                    name,
                    ":",
                    " "
                ]
            }),
            " ",
            loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Spinner, {
                size: "xs"
            }) : creator ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.Creator, {
                creator: creator,
                onClick: onCreatorClick
            }) : "None"
        ]
    }));
};
const AuthorityAndTokenInfo = ({ mintKey  })=>{
    const { info: tokenBonding , loading  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useTokenBondingFromMint)(mintKey);
    const { metadata , loading: loadingMeta  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useTokenMetadata)(mintKey);
    const updateAuthority = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.usePublicKey)(metadata === null || metadata === void 0 ? void 0 : metadata.updateAuthority);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
        justify: "center",
        gap: 1,
        flexWrap: "wrap",
        fontSize: "14px",
        spacing: 4,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InfoItem, {
                creator: updateAuthority,
                loading: loading,
                name: "Requester"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InfoItem, {
                creator: tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.reserveAuthority,
                loading: loading,
                name: "Approver"
            })
        ]
    }));
};


/***/ }),

/***/ 8917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ BountyCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AuthorityAndTokenInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8189);
/* harmony import */ var _BountyCardContribution__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5417);







const BountyCard = ({ mintKey , onClick  })=>{
    const { image , displayName , loading  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__.useTokenMetadata)(mintKey);
    const { info: tokenBonding , loading: bondingLoading  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__.useTokenBondingFromMint)(mintKey);
    const { metadata  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__.useTokenMetadata)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.baseMint);
    const reserveAmount = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__.useReserveAmount)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.publicKey);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
        w: "full",
        onClick: ()=>onClick()
        ,
        align: "flex-start",
        spacing: 4,
        _hover: {
            backgroundColor: "gray.100",
            cursor: "pointer",
            textDecoration: "none"
        },
        padding: 8,
        children: [
            !loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                w: "45px",
                h: "45px",
                src: image,
                alt: displayName
            }),
            loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
                w: "45px",
                h: "45px"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.SimpleGrid, {
                columns: [
                    1,
                    2
                ],
                gap: 4,
                w: "full",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
                        maxWidth: "500px",
                        spacing: 4,
                        align: "left",
                        children: [
                            !loading && displayName && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                fontSize: "20px",
                                size: "md",
                                children: displayName
                            }),
                            loading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
                                w: "full",
                                align: "left",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
                                        width: "full",
                                        height: "20px"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
                                        width: "50%",
                                        height: "20px"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AuthorityAndTokenInfo__WEBPACK_IMPORTED_MODULE_5__/* .AuthorityAndTokenInfo */ .O, {
                                mintKey: mintKey
                            }),
                            !bondingLoading && tokenBonding && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                color: "gray.400",
                                children: [
                                    "Created",
                                    " ",
                                    moment__WEBPACK_IMPORTED_MODULE_3___default()(tokenBonding.goLiveUnixTime.toNumber() * 1000).fromNow()
                                ]
                            }),
                            bondingLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
                                w: "80px"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        justifySelf: [
                            null,
                            "flex-end"
                        ],
                        alignSelf: "center",
                        alignContent: "left",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BountyCardContribution__WEBPACK_IMPORTED_MODULE_6__/* .BountyCardContribution */ .e, {
                            amount: reserveAmount,
                            symbol: metadata === null || metadata === void 0 ? void 0 : metadata.data.symbol
                        })
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 5417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ BountyCardContribution)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_numberWithCommas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3239);





const BountyCardContribution = ({ amount , symbol , text ="Contributed"  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
        spacing: 2,
        rounded: "lg",
        padding: 4,
        border: "1px solid",
        borderColor: "gray.200",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
                spacing: 2,
                justify: "center",
                flexWrap: "wrap",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                        fontWeight: 800,
                        color: "gray.700",
                        children: typeof amount != "undefined" ? (0,_utils_numberWithCommas__WEBPACK_IMPORTED_MODULE_4__/* .numberWithCommas */ .x)((0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.roundToDecimals)(amount, 4)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Spinner, {
                            size: "sm"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                        color: "gray.700",
                        children: symbol
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                color: "gray.500",
                children: text
            })
        ]
    }));
};


/***/ }),

/***/ 4382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ BountyList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);



const BountyList = ({ children  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
        align: "left",
        rounded: "lg",
        spacing: 0,
        backgroundColor: "white",
        divider: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.StackDivider, {
            borderColor: "gray.200"
        }),
        children: children
    }));
};


/***/ }),

/***/ 9559:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ MintSelectModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _form_MintSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4948);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_form_MintSelect__WEBPACK_IMPORTED_MODULE_3__]);
_form_MintSelect__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const MintSelectModal = ({ onChange , value , buttonProps  })=>{
    const { isOpen , onOpen , onClose  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)();
    const mintKey = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_4__.usePublicKey)(value);
    const { metadata , loading  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_4__.useTokenMetadata)(mintKey);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                onClick: onOpen,
                ...buttonProps,
                children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Spinner, {
                    size: "xs"
                }) : metadata ? metadata.data.symbol : "All Mints"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {
                isOpen: isOpen,
                onClose: onClose,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalOverlay, {
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalContent, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, {
                                children: "Select Mint"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalCloseButton, {
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_MintSelect__WEBPACK_IMPORTED_MODULE_3__/* .MintSelect */ .J, {
                                    onChange: onChange,
                                    value: value
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalFooter, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    colorScheme: "blue",
                                    mr: 3,
                                    onClick: onClose,
                                    children: "Done"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};

});

/***/ }),

/***/ 163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vd": () => (/* binding */ SOLANA_URL),
/* harmony export */   "_O": () => (/* binding */ SITE_URL),
/* harmony export */   "Db": () => (/* binding */ WUMBO_IDENTITY_SERVICE_URL),
/* harmony export */   "vt": () => (/* binding */ GA_TRACKING_ID),
/* harmony export */   "Mw": () => (/* binding */ IS_PRODUCTION)
/* harmony export */ });
/* unused harmony export NFT_STORAGE_API_KEY */
const SOLANA_URL = "https://ssc-dao.genesysgo.net/" || 0;
const NFT_STORAGE_API_KEY = process.env.NEXT_PUBLIC_NFT_STORAGE_API_KEY;
const SITE_URL = "https://autist.design" || 0;
const WUMBO_IDENTITY_SERVICE_URL = "https://prod-identity.teamwumbo.com" || 0;
const GA_TRACKING_ID = "G-L4QLBX3394" || 0;
const IS_PRODUCTION = "production" === "production";


/***/ }),

/***/ 7579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ useBounties)
/* harmony export */ });
/* harmony import */ var _contexts_marketplaceSdkContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9684);
/* harmony import */ var react_async_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3188);
/* harmony import */ var react_async_hook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_async_hook__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2733);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fuse_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9817);
/* harmony import */ var _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4022);
/* harmony import */ var _strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_6__);








async function getBounties(marketplaceSdk, baseMint) {
    if (marketplaceSdk) {
        return marketplaceSdk.getBounties({
            baseMint
        });
    }
}
async function enrich(shouldEnrich, bountyItems, tokenMetadataSdk) {
    if (shouldEnrich) {
        return Promise.all(bountyItems.map(async (bounty)=>{
            const tokenMetadata = await (tokenMetadataSdk === null || tokenMetadataSdk === void 0 ? void 0 : tokenMetadataSdk.getMetadata(await _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_5__.Metadata.getPDA(bounty.targetMint))) || undefined;
            const data = await _strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_6__.SplTokenMetadata.getArweaveMetadata(tokenMetadata === null || tokenMetadata === void 0 ? void 0 : tokenMetadata.data.uri);
            return {
                ...bounty,
                tokenMetadata,
                data,
                attributes: _strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_6__.SplTokenMetadata.attributesToRecord(data === null || data === void 0 ? void 0 : data.attributes)
            };
        }));
    }
    return bountyItems;
}
const BATCH_SIZE = 20;
const LIMIT = 20;
// Enrich batch size at a time with token metadata. This
// keeps us from hitting metadata for every single bounty, only
// the ones we may need. Batch fetches up to limit results returned
function useEnriched(search, bountyItems, tokenMetadataSdk, batchSize = BATCH_SIZE, limit = LIMIT) {
    if (batchSize > limit) {
        batchSize = limit;
    }
    const { 0: enriched , 1: setEnriched  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const flat = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>enriched.flat()
    , [
        enriched
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        (async ()=>{
            if (bountyItems) {
                const batched = (0,_strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_6__.chunks)(bountyItems, batchSize);
                for (const [index, batch] of batched.entries()){
                    let nextSet = (await enrich(true, batch, tokenMetadataSdk)).filter((i)=>{
                        var ref;
                        return (ref = i.attributes) === null || ref === void 0 ? void 0 : ref.is_strata_bounty;
                    });
                    if (search) {
                        nextSet = new (fuse_js__WEBPACK_IMPORTED_MODULE_2___default())(nextSet, {
                            keys: [
                                "tokenMetadata.data.name",
                                "tokenMetadata.data.symbol"
                            ],
                            threshold: 0.2
                        }).search(search).map((result)=>result.item
                        );
                    }
                    setEnriched((e)=>{
                        e[index] = nextSet;
                        return [
                            ...e
                        ];
                    });
                    if (enriched.flat().length + nextSet.length > limit) {
                        break;
                    }
                }
            }
        })().catch(console.error);
    }, [
        bountyItems,
        batchSize,
        search,
        tokenMetadataSdk,
        limit
    ]);
    if (!bountyItems || !tokenMetadataSdk) {
        return undefined;
    }
    return flat;
}
function useBounties({ search , baseMint , sortType ="GO_LIVE" , sortDirection ="DESC" , limit =LIMIT  }) {
    const { tokenMetadataSdk  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_4__.useStrataSdks)();
    const { marketplaceSdk  } = (0,_contexts_marketplaceSdkContext__WEBPACK_IMPORTED_MODULE_0__/* .useMarketplaceSdk */ .T7)();
    const { result: bounties , ...rest } = (0,react_async_hook__WEBPACK_IMPORTED_MODULE_1__.useAsync)(getBounties, [
        marketplaceSdk,
        baseMint, 
    ]);
    const sorted = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        if (bounties) {
            return [
                ...bounties.sort((a, b)=>{
                    const sortField = sortType === "GO_LIVE" ? (thing)=>thing.goLiveUnixTime.toNumber()
                     : (thing)=>thing.reserveBalanceFromBonding.toNumber()
                    ;
                    return sortDirection === "DESC" ? sortField(b) - sortField(a) : sortField(a) - sortField(b);
                })
            ];
        }
        return [];
    }, [
        bounties,
        sortType,
        sortDirection
    ]);
    const enriched = useEnriched(search, sorted, tokenMetadataSdk, BATCH_SIZE, limit);
    return {
        ...rest,
        result: enriched
    };
}


/***/ }),

/***/ 3239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ numberWithCommas)
/* harmony export */ });
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_0__);

function numberWithCommas(x, decimals = 4) {
    return (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_0__.roundToDecimals)(x, decimals).toLocaleString("en-US", {
        maximumFractionDigits: decimals
    });
}


/***/ })

};
;