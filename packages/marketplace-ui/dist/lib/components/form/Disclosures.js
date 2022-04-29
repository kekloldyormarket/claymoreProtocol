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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disclosures = exports.disclosuresSchema = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const react_hook_form_1 = require("react-hook-form");
const yup = __importStar(require("yup"));
exports.disclosuresSchema = yup.object({
    notASecurity: yup.boolean().required().isTrue(),
    acceptedFees: yup.boolean().required().isTrue(),
});
const Disclosures = ({ fees }) => {
    var _a, _b;
    const { register, formState: { errors }, } = (0, react_hook_form_1.useFormContext)();
    return (react_1.default.createElement(react_2.VStack, { spacing: 2, w: "full", align: "left" },
        react_1.default.createElement(react_2.Checkbox, Object.assign({ isInvalid: !!((_a = errors.disclosures) === null || _a === void 0 ? void 0 : _a.notASecurity) }, register("disclosures.notASecurity")), "I represent that I have undertaken sufficient legal analysis to determine that the token does not constitute a security under U.S. law."),
        fees && (react_1.default.createElement(react_2.Checkbox, Object.assign({ isInvalid: !!((_b = errors.disclosures) === null || _b === void 0 ? void 0 : _b.acceptedFees) }, register("disclosures.acceptedFees")),
            "I understand that Strata will take a ",
            fees,
            "% fee on tokens sold."))));
};
exports.Disclosures = Disclosures;
//# sourceMappingURL=Disclosures.js.map