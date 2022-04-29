"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberWithCommas = void 0;
const react_1 = require("@strata-foundation/react");
function numberWithCommas(x, decimals = 4) {
    return (0, react_1.roundToDecimals)(x, decimals).toLocaleString("en-US", {
        maximumFractionDigits: decimals
    });
}
exports.numberWithCommas = numberWithCommas;
//# sourceMappingURL=numberWithCommas.js.map