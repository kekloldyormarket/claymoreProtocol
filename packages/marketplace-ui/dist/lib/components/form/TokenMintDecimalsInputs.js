"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenMintDecimalsInputs = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const react_hook_form_1 = require("react-hook-form");
const FormControlWithError_1 = require("./FormControlWithError");
const RadioCard_1 = require("./RadioCard");
const TokenMintDecimalsInputs = ({ maxDecimals = 12, }) => {
    const { watch, formState: { errors }, setValue, clearErrors, } = (0, react_hook_form_1.useFormContext)();
    const { getRootProps, getRadioProps } = (0, react_2.useRadioGroup)({
        name: "decimals",
        onChange: (value) => {
            setValue("decimals", +value);
            clearErrors("decimals");
        },
    });
    const decimals = watch("decimals");
    const group = getRootProps();
    const decimalOptions = Array.from(Array(maxDecimals + 1)).map((_, index) => ({
        value: index,
        heading: index,
    }));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(FormControlWithError_1.FormControlWithError, { id: "decimals", label: "Mint Decimals", errors: errors, help: "The number of decimal places this mint will have. For example, SOL has 9 decimal places of precision. 0 is best used for 1:1 items like raffle tickets, collectibles, or something redeemable." },
            react_1.default.createElement(react_2.Stack, Object.assign({}, group, { direction: "row", flexWrap: "wrap", spacing: 0 }), decimalOptions.map(({ value, heading }) => {
                const radio = getRadioProps({ value });
                return (react_1.default.createElement(RadioCard_1.RadioCard, Object.assign({}, radio, { isChecked: decimals === value, key: value }),
                    react_1.default.createElement(react_2.Flex, { w: 10, h: 10, justifyContent: "center", alignItems: "center" },
                        react_1.default.createElement(react_2.Text, { fontWeight: "bold", fontSize: "md" }, heading))));
            })))));
};
exports.TokenMintDecimalsInputs = TokenMintDecimalsInputs;
//# sourceMappingURL=TokenMintDecimalsInputs.js.map