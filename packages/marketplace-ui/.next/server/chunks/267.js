"use strict";
exports.id = 267;
exports.ids = [267];
exports.modules = {

/***/ 5267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "H": () => (/* reexport */ LaunchpadLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: ./src/components/launchpad/LaunchpadLayout.tsx




const LaunchpadLayout = ({ heading , subHeading , backVisible , onBack , nextDisabled , onNext , children ,  })=>{
    const router = (0,router_.useRouter)();
    const handleOnBack = async ()=>{
        onBack && await onBack();
        router.back();
    };
    const handleOnNext = async ()=>{
        onNext && await onNext();
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Center, {
                padding: "54px",
                backgroundColor: "black.500",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
                    spacing: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                        fontSize: "xl",
                        color: "white",
                        textAlign: "center",
                        children: [
                            "Welcome to",
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                fontWeight: "Bold",
                                background: "linear-gradient(to right,#FFCD01, #E17E44);",
                                backgroundClip: "text",
                                children: "Claymore Protocol"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                w: "full",
                py: 12,
                bgColor: "gray.100",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
                    maxW: "container.lg",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                        spacing: 8,
                        justifyContent: "center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                                alignItems: "center",
                                textAlign: "center",
                                fontWeight: "bold",
                                lineHeight: "normal",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        fontSize: "2xl",
                                        children: heading
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        color: "gray.400",
                                        children: subHeading
                                    })
                                ]
                            }),
                            children
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
                maxW: "container.lg",
                display: "flex",
                justifyContent: "space-between",
                py: 6,
                children: [
                    backVisible ? /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                        colorScheme: "primary",
                        variant: "outline",
                        w: "full",
                        maxW: "140px",
                        onClick: handleOnBack,
                        children: "Back"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                        colorScheme: "primary",
                        disabled: nextDisabled,
                        w: "full",
                        maxW: "140px",
                        onClick: handleOnNext,
                        children: "Next"
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/launchpad/index.tsx



/***/ })

};
;