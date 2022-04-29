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
exports.BondingPlot = void 0;
const react_1 = require("@chakra-ui/react");
const react_2 = require("@strata-foundation/react");
const moment_1 = __importDefault(require("moment"));
const react_3 = __importStar(require("react"));
const bi_1 = require("react-icons/bi");
const recharts_1 = require("recharts");
const numberWithCommas_1 = require("../../utils/numberWithCommas");
const client_1 = require("@apollo/client");
const GET_BONDING_CHANGES = (0, client_1.gql) `
  query GetBondingChanges(
    $address: PublicKey!
    $startUnixTime: NaiveDateTime!
    $stopUnixTime: NaiveDateTime!
    $limit: Int!
    $offset: Int!
  ) {
    enrichedBondingChanges(
      address: $address
      startUnixTime: $startUnixTime
      stopUnixTime: $stopUnixTime
      limit: $limit
      offset: $offset
    ) {
      reserveChange
      supplyChange
      insertTs
    }
  }
`;
function now() {
    return new Date().valueOf() / 1000;
}
const BondingPlot = ({ tokenBondingKey, }) => {
    var _a;
    const { info: tokenBonding, loading: loadingBonding } = (0, react_2.useTokenBonding)(tokenBondingKey);
    const [stopTime, setStopTime] = (0, react_3.useState)(now());
    const baseMint = (0, react_2.useMint)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.baseMint);
    const targetMint = (0, react_2.useMint)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.targetMint);
    const { data: { enrichedBondingChanges } = {}, error, loading, } = (0, client_1.useQuery)(GET_BONDING_CHANGES, {
        variables: {
            address: tokenBondingKey,
            startUnixTime: Math.max(stopTime - 60 * 60 * 24, ((_a = tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.goLiveUnixTime) === null || _a === void 0 ? void 0 : _a.toNumber()) || 0),
            stopUnixTime: stopTime,
            offset: 0,
            limit: 1000,
        },
    });
    const data = (0, react_3.useMemo)(() => {
        if (enrichedBondingChanges && baseMint && targetMint) {
            return enrichedBondingChanges.map((c) => ({
                time: c.insertTs * 1000,
                price: Math.abs((Number(c.reserveChange) / Math.pow(10, baseMint.decimals)) / (Number(c.supplyChange) / Math.pow(10, targetMint.decimals))),
            })).filter(p => p.price !== NaN && p.price !== Infinity);
        }
        return [];
    }, [enrichedBondingChanges, baseMint, targetMint]);
    const { handleErrors } = (0, react_2.useErrorHandler)();
    handleErrors(error);
    const labelColor = (0, react_1.useColorModeValue)("black", "white");
    const icoColor = (0, react_1.useColorModeValue)("black", "white");
    const longestLabelLength = (0, react_3.useMemo)(() => data
        .map((d) => (0, numberWithCommas_1.numberWithCommas)(d.price, 9))
        .reduce((acc, cur) => (cur.length > acc ? cur.length : acc), 0), [data, baseMint]);
    if (loadingBonding || !baseMint || !targetMint) {
        return (react_3.default.createElement(react_1.Center, null,
            react_3.default.createElement(react_2.Spinner, null)));
    }
    return (react_3.default.createElement(react_1.VStack, { spacing: 4, w: "full", align: "left" },
        react_3.default.createElement(react_1.HStack, { spacing: 0 },
            react_3.default.createElement(react_1.Text, { fontSize: "18px", fontWeight: "700" }, "Price History"),
            react_3.default.createElement(react_1.IconButton, { "aria-label": "Fetch More", onClick: () => setStopTime(now()), isLoading: loading, color: icoColor, variant: "link", icon: react_3.default.createElement(react_1.Icon, { h: "24px", w: "24px", mb: "-2px", as: bi_1.BiRefresh }) })),
        react_3.default.createElement(react_1.Box, { w: "full", h: "136px" },
            react_3.default.createElement(recharts_1.ResponsiveContainer, { height: "100%" },
                react_3.default.createElement(recharts_1.LineChart, { data: data },
                    react_3.default.createElement(recharts_1.CartesianGrid, { stroke: "rgba(229, 229, 229, 0.3)" }),
                    react_3.default.createElement(recharts_1.XAxis, { tickCount: 5, interval: 0, dataKey: "time", domain: ["auto", "auto"], name: "Time", tickFormatter: (unixTime) => (0, moment_1.default)(unixTime).format("LT"), type: "number" }),
                    react_3.default.createElement(recharts_1.YAxis, { tickFormatter: (num) => (0, numberWithCommas_1.numberWithCommas)(num, baseMint.decimals), tickCount: 3, domain: ["auto", "auto"], tickLine: false, type: "number", orientation: "right", stroke: labelColor, width: longestLabelLength * 7, axisLine: false }),
                    react_3.default.createElement(recharts_1.Line, { isAnimationActive: false, dot: false, type: "monotone", dataKey: "price", stroke: "#81fff0" }))))));
};
exports.BondingPlot = BondingPlot;
//# sourceMappingURL=BondingPlot.js.map