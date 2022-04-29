"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.event = exports.pageview = void 0;
const constants_1 = require("../constants");
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = (url) => {
    window.gtag("config", constants_1.GA_TRACKING_ID, {
        page_path: url,
    });
};
exports.pageview = pageview;
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const event = ({ action, category, label, value }) => {
    window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value,
    });
};
exports.event = event;
//# sourceMappingURL=gtag.js.map