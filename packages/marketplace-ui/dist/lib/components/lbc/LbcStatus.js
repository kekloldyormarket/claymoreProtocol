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
exports.LbcStatus = void 0;
const react_1 = __importStar(require("react"));
const react_2 = require("@strata-foundation/react");
const Countdown_1 = require("../Countdown");
const react_3 = require("@chakra-ui/react");
const LbcStatus = ({ tokenBondingKey, }) => {
    const { info: tokenBonding } = (0, react_2.useTokenBonding)(tokenBondingKey);
    const goLiveDate = (0, react_1.useMemo)(() => {
        if (tokenBonding) {
            const date = new Date(0);
            date.setUTCSeconds(tokenBonding.goLiveUnixTime.toNumber());
            return date;
        }
    }, [tokenBonding]);
    const [isLive, setIsLive] = (0, react_1.useState)(true);
    (0, react_3.useInterval)(() => {
        setIsLive(goLiveDate ? goLiveDate < new Date() : true);
    }, 500);
    const { numRemaining } = (0, react_2.useCapInfo)(tokenBondingKey);
    const isSoldOut = typeof numRemaining !== "undefined" && numRemaining <= 0;
    if (isSoldOut) {
        return (react_1.default.createElement(react_3.Center, { rounded: "lg", borderColor: "primary.500", borderWidth: "1px", padding: 4 },
            react_1.default.createElement(react_3.Text, { fontWeight: 600, color: "primary.500" }, "SOLD OUT")));
    }
    else if (!isLive && goLiveDate) {
        return react_1.default.createElement(Countdown_1.Countdown, { date: goLiveDate });
    }
    else {
        return null;
    }
};
exports.LbcStatus = LbcStatus;
//# sourceMappingURL=LbcStatus.js.map