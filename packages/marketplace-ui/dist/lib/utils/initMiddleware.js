"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function initMiddleware(middleware) {
    return (req, res) => new Promise((resolve, reject) => {
        middleware(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}
exports.default = initMiddleware;
//# sourceMappingURL=initMiddleware.js.map