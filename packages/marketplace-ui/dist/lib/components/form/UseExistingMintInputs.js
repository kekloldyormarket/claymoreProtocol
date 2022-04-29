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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseExistingMintInputs = void 0;
const react_1 = require("@chakra-ui/react");
const react_2 = require("@strata-foundation/react");
const router_1 = require("next/router");
const react_3 = __importStar(require("react"));
const react_hook_form_1 = require("react-hook-form");
const FormControlWithError_1 = require("./FormControlWithError");
const MintSelect_1 = require("./MintSelect");
function UseExistingMintInputs() {
    const { register, watch, formState: { errors }, setValue, } = (0, react_hook_form_1.useFormContext)();
    const router = (0, router_1.useRouter)();
    const mint = router.query["mint"];
    const { useExistingMint, existingMint, name, symbol } = watch();
    const existingMintPkey = (0, react_2.usePublicKey)(existingMint);
    const { metadata } = (0, react_2.useMetaplexTokenMetadata)(existingMintPkey);
    (0, react_3.useEffect)(() => {
        if (mint) {
            setValue("existingMint", mint);
            setValue("useExistingMint", !!mint);
        }
    }, [mint, router, setValue]);
    (0, react_3.useEffect)(() => {
        setValue("name", metadata === null || metadata === void 0 ? void 0 : metadata.data.name);
        setValue("symbol", metadata === null || metadata === void 0 ? void 0 : metadata.data.symbol);
        setValue("uri", metadata === null || metadata === void 0 ? void 0 : metadata.data.uri);
    }, [setValue, metadata]);
    return (react_3.default.createElement(react_3.default.Fragment, null,
        react_3.default.createElement(FormControlWithError_1.FormControlWithError, { id: "useExistingMint", help: "Sell a set amount of an existing spl token rather than creating a new one to sell. Note that you must have the amount you wish to sell in your wallet.", label: "Use an existing token?", errors: errors },
            react_3.default.createElement(react_1.Switch, Object.assign({ isChecked: useExistingMint }, register("useExistingMint")))),
        react_3.default.createElement(react_1.Box, { w: "full", p: 0 },
            react_3.default.createElement(react_1.Collapse, { in: useExistingMint, animateOpacity: true },
                react_3.default.createElement(FormControlWithError_1.FormControlWithError, { id: "existingMint", help: "The mint id of the existing token to use for this sale", label: "Mint", errors: errors },
                    name && (react_3.default.createElement(react_1.Text, { color: "gray.400", size: "sm" },
                        name,
                        " (",
                        symbol,
                        ")")),
                    react_3.default.createElement(MintSelect_1.MintSelect, { value: watch("existingMint") || "", onChange: (s) => setValue("existingMint", s) }))))));
}
exports.UseExistingMintInputs = UseExistingMintInputs;
//# sourceMappingURL=UseExistingMintInputs.js.map