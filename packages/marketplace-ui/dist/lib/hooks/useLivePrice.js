"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLivePrice = void 0;
const react_1 = require("@strata-foundation/react");
const react_2 = require("react");
function useLivePrice(tokenBondingKey) {
    const { pricing, loading } = (0, react_1.useBondingPricing)(tokenBondingKey);
    const [currentPrice, setCurrentPrice] = (0, react_2.useState)();
    (0, react_1.useInterval)(() => {
        if (pricing) {
            setCurrentPrice(pricing.current());
        }
    }, 500);
    return {
        loading,
        price: currentPrice,
    };
}
exports.useLivePrice = useLivePrice;
//# sourceMappingURL=useLivePrice.js.map