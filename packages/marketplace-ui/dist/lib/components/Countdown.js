"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Countdown = void 0;
const react_1 = require("@chakra-ui/react");
const react_2 = __importDefault(require("react"));
const react_countdown_1 = __importDefault(require("react-countdown"));
const TimeCard = ({ name, value }) => (react_2.default.createElement(react_1.VStack, { flexGrow: 1, spacing: 2 },
    react_2.default.createElement(react_1.Text, { fontWeight: 900, fontSize: "24px", color: "primary.500" }, value),
    react_2.default.createElement(react_1.Text, { color: "gray.400", fontSize: "14px" }, name)));
const Sep = () => react_2.default.createElement(react_1.Text, { fontWeight: 600, fontSize: "24px", color: "gray.500" }, ":");
const Countdown = ({ date, children }) => {
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return children || react_2.default.createElement("div", null);
        }
        else {
            // Render a countdown
            return (react_2.default.createElement(react_1.Box, { w: "full", rounded: "lg", borderColor: "primary.500", borderWidth: "1px", padding: 4 },
                react_2.default.createElement(react_1.HStack, { w: "full", spacing: 2, align: "top" },
                    react_2.default.createElement(TimeCard, { value: days, name: "Days" }),
                    react_2.default.createElement(Sep, null),
                    react_2.default.createElement(TimeCard, { value: hours, name: "Hours" }),
                    react_2.default.createElement(Sep, null),
                    react_2.default.createElement(TimeCard, { value: minutes, name: "Minutes" }),
                    react_2.default.createElement(Sep, null),
                    react_2.default.createElement(TimeCard, { value: seconds, name: "Seconds" }))));
        }
    };
    return react_2.default.createElement(react_countdown_1.default, { date: date, renderer: renderer });
};
exports.Countdown = Countdown;
//# sourceMappingURL=Countdown.js.map