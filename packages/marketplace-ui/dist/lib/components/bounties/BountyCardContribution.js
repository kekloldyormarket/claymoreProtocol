"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BountyCardContribution = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const react_3 = require("@strata-foundation/react");
const numberWithCommas_1 = require("../../utils/numberWithCommas");
const BountyCardContribution = ({ amount, symbol, text = "Contributed", }) => {
    return (react_1.default.createElement(react_2.VStack, { spacing: 2, rounded: "lg", padding: 4, border: "1px solid", borderColor: "gray.200" },
        react_1.default.createElement(react_2.HStack, { spacing: 2, justify: "center", flexWrap: "wrap" },
            react_1.default.createElement(react_2.Text, { fontWeight: 800, color: "gray.700" }, typeof amount != "undefined" ? ((0, numberWithCommas_1.numberWithCommas)((0, react_3.roundToDecimals)(amount, 4))) : (react_1.default.createElement(react_2.Spinner, { size: "sm" }))),
            react_1.default.createElement(react_2.Text, { color: "gray.700" }, symbol)),
        react_1.default.createElement(react_2.Text, { color: "gray.500" }, text)));
};
exports.BountyCardContribution = BountyCardContribution;
//# sourceMappingURL=BountyCardContribution.js.map