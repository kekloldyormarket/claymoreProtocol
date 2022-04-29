"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLinkTwitter = exports.auth0 = exports.auth0Options = void 0;
const auth0_js_1 = require("auth0-js");
const constants_1 = require("../constants");
exports.auth0Options = {
    domain: process.env.REACT_APP_AUTH0_DOMAIN || "wumbo.us.auth0.com",
    maxAge: 1,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID || "GPsjYroOyNKWCScIk2woGZi4kBTGDDTW",
};
function makeId(length) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
exports.auth0 = new auth0_js_1.WebAuth(exports.auth0Options);
function useLinkTwitter(redirectUri = constants_1.SITE_URL) {
    const execute = () => {
        const state = makeId(6);
        localStorage.setItem("state", state);
        localStorage.setItem("redirectUri", redirectUri);
        exports.auth0.authorize({
            scope: "openid profile",
            redirectUri,
            responseType: "code",
            prompt: "login",
            state,
        });
    };
    return {
        redirectUri,
        execute,
    };
}
exports.useLinkTwitter = useLinkTwitter;
//# sourceMappingURL=useLinkTwitter.js.map