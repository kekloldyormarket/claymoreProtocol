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
exports.TokenIntervalInputs = void 0;
const react_1 = __importStar(require("react"));
const react_2 = require("@chakra-ui/react");
const react_hook_form_1 = require("react-hook-form");
const FormControlWithError_1 = require("./FormControlWithError");
const RadioCard_1 = require("./RadioCard");
const TokenIntervalInputs = () => {
    const { watch, formState: { errors }, register, setValue, } = (0, react_hook_form_1.useFormContext)();
    const [isManualEntry, setIsManualEntry] = (0, react_1.useState)(false);
    const { getRootProps, getRadioProps } = (0, react_2.useRadioGroup)({
        name: "interval",
        onChange: (value) => setValue("interval", +value),
    });
    const interval = watch("interval");
    const group = getRootProps();
    const intervalOptions = [
        { value: 900, heading: "15 Minutes" },
        { value: 1800, heading: "30 Minutes" },
        { value: 10800, heading: "3 Hours" },
        { value: 43200, heading: "12 Hours" },
        { value: 86400, heading: "1 Day" },
        { value: 259200, heading: "3 Days" },
    ];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(FormControlWithError_1.FormControlWithError, { id: "interval", label: "Interval", errors: errors, help: isManualEntry
                ? "How long should this LBC go on for (in seconds)? This period is the time during which the price will fall. We recommend you set this period long enough so that everyone gets a chance to participate. Windows less than 15 Minutes (900 seconds) are not recommended."
                : "How long should this LBC go on for? This period is the time during which the price will fall. We recommend you set this period long enough so that everyone gets a chance to participate." },
            react_1.default.createElement(react_2.Stack, Object.assign({}, group, { direction: "row", flexWrap: "wrap", spacing: 0 }), intervalOptions.map(({ value, heading }) => {
                const radio = getRadioProps({ value });
                return (react_1.default.createElement(RadioCard_1.RadioCard, Object.assign({}, radio, { isChecked: interval === value, key: value }),
                    react_1.default.createElement(react_2.Flex, { w: 24, h: 10, justifyContent: "center", alignItems: "center" },
                        react_1.default.createElement(react_2.Text, { fontWeight: "bold", fontSize: "sm" }, heading))));
            })),
            react_1.default.createElement(react_2.Box, { mt: 3 },
                !isManualEntry && (react_1.default.createElement(react_2.Button, { colorScheme: "orange", variant: "link", size: "sm", onClick: () => setIsManualEntry(true) }, "Custom Interval")),
                isManualEntry && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(react_2.Input, Object.assign({ type: "number", min: 0, step: 0.000000000001 }, register("interval"))),
                    react_1.default.createElement(react_2.Text, { color: "red.500", fontSize: "sm", mt: 2 }, "Any value less than 15 Minutes (900 seconds) will result in the initial price dropping fast.")))))));
};
exports.TokenIntervalInputs = TokenIntervalInputs;
//# sourceMappingURL=TokenIntervalnputs.js.map