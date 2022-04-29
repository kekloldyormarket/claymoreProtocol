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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LbcInfo = void 0;
const react_1 = require("@chakra-ui/react");
const react_2 = require("@strata-foundation/react");
const moment_1 = __importDefault(require("moment"));
const react_3 = __importStar(require("react"));
const react_circular_progressbar_1 = require("react-circular-progressbar");
const bs_1 = require("react-icons/bs");
const useLivePrice_1 = require("../..//hooks/useLivePrice");
const numberWithCommas_1 = require("../../utils/numberWithCommas");
const BlackBox = (_a) => {
    var { children } = _a, other = __rest(_a, ["children"]);
    return (react_3.default.createElement(react_1.Center, Object.assign({ p: "26px", rounded: "lg", backgroundColor: (0, react_1.useColorModeValue)("gray.200", "black.500") }, other), children));
};
const BigText = (_a) => {
    var { children } = _a, other = __rest(_a, ["children"]);
    return (react_3.default.createElement(react_1.Text, Object.assign({ fontWeight: 700, fontSize: "24px" }, other), children));
};
const LbcInfo = ({ tokenBondingKey, useTokenOfferingCurve = false, price: inputPrice, }) => {
    const { isOpen, onToggle } = (0, react_1.useDisclosure)({
        defaultIsOpen: false,
    });
    const { info: tokenBonding, loading: loadingBonding } = (0, react_2.useTokenBonding)(tokenBondingKey);
    const { price, loading: loadingPricing } = (0, useLivePrice_1.useLivePrice)(tokenBondingKey);
    const { numRemaining, mintCap } = (0, react_2.useCapInfo)(tokenBondingKey, useTokenOfferingCurve);
    const priceToUse = inputPrice || price;
    const { info: curve } = (0, react_2.useCurve)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.curve);
    const maxTime = 
    // @ts-ignore
    curve === null || curve === void 0 ? void 0 : curve.definition.timeV0.curves[0].curve.timeDecayExponentialCurveV0.interval;
    const [elapsedTime, setElapsedTime] = (0, react_3.useState)();
    (0, react_1.useInterval)(() => {
        setElapsedTime(tokenBonding
            ? new Date().valueOf() / 1000 - tokenBonding.goLiveUnixTime.toNumber()
            : undefined);
    }, 500);
    const endDate = new Date(0);
    endDate.setUTCSeconds(((tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.goLiveUnixTime.toNumber()) || 0) + (maxTime || 0));
    const { metadata } = (0, react_2.useTokenMetadata)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.baseMint);
    return (react_3.default.createElement(react_1.VStack, { spacing: 4, align: "stretch" },
        react_3.default.createElement(react_1.Stack, { direction: ["column", "row"] },
            react_3.default.createElement(react_1.VStack, { flexGrow: 2 },
                react_3.default.createElement(BlackBox, { w: "full", position: "relative" },
                    loadingPricing || typeof priceToUse == "undefined" ? (react_3.default.createElement(react_1.Spinner, { size: "lg" })) : (react_3.default.createElement(BigText, null, isNaN(priceToUse)
                        ? "Not Started"
                        : `${(0, numberWithCommas_1.numberWithCommas)(priceToUse, 4)} ${metadata === null || metadata === void 0 ? void 0 : metadata.data.symbol}`)),
                    react_3.default.createElement(react_1.Tooltip, { label: `${moment_1.default
                            .duration(maxTime - (elapsedTime || 0), "seconds")
                            .humanize()} Remaining` },
                        react_3.default.createElement(react_1.Box, { position: "absolute", top: "14px", right: "14px", w: "14px", h: "14px" },
                            react_3.default.createElement(react_circular_progressbar_1.CircularProgressbar, { counterClockwise: true, value: elapsedTime && maxTime
                                    ? ((maxTime - elapsedTime) / maxTime) * 100
                                    : 0, strokeWidth: 50, styles: (0, react_circular_progressbar_1.buildStyles)({
                                    strokeLinecap: "butt",
                                    trailColor: "transparent",
                                    pathColor: "rgba(255, 255, 255, 0.36)",
                                }) })))),
                react_3.default.createElement(react_1.Button, { color: (0, react_1.useColorModeValue)("black", "white"), variant: "link", fontWeight: 700, onClick: onToggle, rightIcon: react_3.default.createElement(react_1.Icon, { mb: "-3px", color: "gray.300", as: isOpen ? bs_1.BsChevronUp : bs_1.BsChevronDown }) }, "Price")),
            react_3.default.createElement(react_1.VStack, { flexGrow: 1 },
                react_3.default.createElement(BlackBox, { w: "full", position: "relative" },
                    loadingBonding ? (react_3.default.createElement(react_1.Spinner, null)) : (react_3.default.createElement(BigText, null, numRemaining ? (0, numberWithCommas_1.numberWithCommas)(numRemaining, 4) : "0")),
                    react_3.default.createElement(react_1.LightMode, null,
                        react_3.default.createElement(react_1.Progress, { w: "95%", size: "xs", h: "2px", position: "absolute", bottom: "-1px", colorScheme: "primary", background: "rgba(196, 196, 196, 0.4)", value: ((numRemaining || 0) / (mintCap || 0)) * 100 }))),
                react_3.default.createElement(react_1.Text, { fontWeight: 700 }, "Remaining"))),
        react_3.default.createElement(react_1.Collapse, { in: isOpen, animateOpacity: true },
            react_3.default.createElement(react_1.VStack, { align: "left", spacing: 4, padding: 4 },
                react_3.default.createElement(react_1.VStack, { spacing: 1, align: "left" },
                    react_3.default.createElement(react_1.Text, { fontSize: "14px", fontWeight: "700" }, "How does Dynamic Pricing work?"),
                    react_3.default.createElement(react_1.Text, { fontSize: "12px" },
                        "Dynamic Pricing is similiar to a Dutch Auction. The price starts high, lowers gradually, and only increases when people buy. This price discovery mechanism is powered by a Strata Liquidity Bootstrapping Curve (LBC).",
                        " ",
                        react_3.default.createElement(react_1.Link, { color: "primary.500", href: "https://docs.strataprotocol.com/marketplace/lbc" }, "Learn More"))),
                react_3.default.createElement(react_1.Text, { fontSize: "14px" },
                    "End Date: ",
                    (0, moment_1.default)(endDate).format("LLL"))))));
};
exports.LbcInfo = LbcInfo;
//# sourceMappingURL=LbcInfo.js.map