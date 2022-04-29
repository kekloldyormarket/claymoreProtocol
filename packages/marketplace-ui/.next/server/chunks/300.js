"use strict";
exports.id = 300;
exports.ids = [300];
exports.modules = {

/***/ 5109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ FormControlWithError)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function FormControlWithError({ id , label , help , children , errors , ...rest }) {
    var ref, ref1;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
        id: id,
        ...rest,
        children: [
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                htmlFor: id,
                children: label
            }),
            children,
            (errors[id] || help) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormHelperText, {
                color: ((ref = errors[id]) === null || ref === void 0 ? void 0 : ref.message) && "red.400",
                children: ((ref1 = errors[id]) === null || ref1 === void 0 ? void 0 : ref1.message) || help
            })
        ]
    }));
}


/***/ }),

/***/ 8300:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ TokenMetadataInputs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4022);
/* harmony import */ var _strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5641);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8098);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _FormControlWithError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5109);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_4__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];







function TokenMetadataInputs({ entityName ="post"  }) {
    var ref2, ref1;
    const { register , watch , formState: { errors  } , clearErrors , setValue , setError ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useFormContext)();
    const { image  } = watch();
    const { 0: imgUrl , 1: setImgUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const hiddenFileInput = react__WEBPACK_IMPORTED_MODULE_3___default().useRef(null);
    const { getRootProps , getRadioProps  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useRadioGroup)({
        name: "provider",
        onChange: (option)=>setValue("provider", option)
    });
    const group = getRootProps();
    const storageOptions = [
        {
            value: _strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_2__.StorageProvider.Arweave,
            heading: "Arweave",
            illustration: "/arweave.png",
            helpText: "Instant storage for your image and description, but you will need to pay a small fee in Sol for the upload"
        }, 
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (image) {
            const reader = new FileReader();
            reader.onload = (event)=>{
                var ref;
                setImgUrl(((ref = event.target) === null || ref === void 0 ? void 0 : ref.result) || "");
            };
            reader.readAsDataURL(image);
        } else {
            setImgUrl(undefined);
        }
    }, [
        image
    ]);
    // Default to Arweave
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setValue("provider", _strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_2__.StorageProvider.Arweave);
    }, [
        setValue
    ]);
    const provider = watch("provider");
    const handleImageChange = (e)=>{
        const file = e.target.files[0];
        const sizeKB = file.size / 1024;
        if (sizeKB < 25) {
            // @ts-ignore
            setError("image", {
                type: "manual",
                message: `The file ${file.name} is too small. It is ${Math.round(10 * sizeKB) / 10}KB but should be at least 25KB.`
            });
            return;
        }
        // @ts-ignore
        setValue("image", file || null);
        // @ts-ignore
        clearErrors("image");
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormControlWithError__WEBPACK_IMPORTED_MODULE_6__/* .FormControlWithError */ .H, {
                id: "name",
                help: `The name that will be displayed for this ${entityName} + hydra`,
                label: "Name",
                errors: errors,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                    ...register("name")
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                id: "image",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                        children: "Photo"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                        w: "full",
                        spacing: 4,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                size: "md",
                                colorScheme: "primary",
                                variant: "outline",
                                onClick: ()=>hiddenFileInput.current.click()
                                ,
                                children: "Choose"
                            }),
                            image && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                                spacing: 2,
                                align: "center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                        alt: image.name,
                                        w: "32px",
                                        h: "32px",
                                        src: imgUrl
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        color: "gray.500",
                                        children: image.name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                        w: "22px",
                                        h: "22px",
                                        color: "green.400",
                                        as: react_icons_ri__WEBPACK_IMPORTED_MODULE_5__.RiCheckFill
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        id: "image",
                        type: "file",
                        accept: ".png,.jpg,.gif,.mp4,.svg",
                        multiple: false,
                        onChange: handleImageChange,
                        ref: hiddenFileInput,
                        style: {
                            display: "none"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormHelperText, {
                        color: ((ref2 = errors.image) === null || ref2 === void 0 ? void 0 : ref2.message) && "red.400",
                        children: ((ref1 = errors.image) === null || ref1 === void 0 ? void 0 : ref1.message) || `The image that will be displayed with this ${entityName}`
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormControlWithError__WEBPACK_IMPORTED_MODULE_6__/* .FormControlWithError */ .H, {
                id: "Description",
                help: `The description that will be displayed for this ${entityName}`,
                label: "Description",
                errors: errors,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Textarea, {
                    borderColor: "gray.200",
                    ...register("description")
                })
            })
        ]
    }));
}

});

/***/ })

};
;