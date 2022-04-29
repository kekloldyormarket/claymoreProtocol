"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataMeta = void 0;
const react_1 = __importDefault(require("react"));
const next_seo_1 = require("next-seo");
const constants_1 = require("../constants");
const MetadataMeta = ({ title, description, image, cardType = "summary", url, }) => {
    return (react_1.default.createElement(next_seo_1.NextSeo, { title: title, description: description, openGraph: {
            url: url,
            title: title,
            description: description,
            images: [{ url: image }],
            site_name: "StrataLaunchpad",
        }, twitter: {
            handle: "@StrataProtocol",
            site: constants_1.SITE_URL,
            cardType: cardType,
        } }));
};
exports.MetadataMeta = MetadataMeta;
//# sourceMappingURL=MetadataMeta.js.map