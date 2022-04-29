"use strict";
exports.id = 884;
exports.ids = [884];
exports.modules = {

/***/ 884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ routes),
/* harmony export */   "B": () => (/* binding */ route1)
/* harmony export */ });
const routes = {
    bounties: {
        path: "/bounties",
        params: []
    },
    newBounty: {
        path: "/launchpad/bounties/new",
        params: []
    },
    bounty: {
        path: "/bounties/:mintKey",
        params: [
            "mintKey"
        ]
    },
    editBounty: {
        path: "/bounties/:mintKey/edit",
        params: [
            "mintKey"
        ]
    },
    sales: {
        path: "/sales",
        params: []
    },
    newSale: {
        path: "/launchpad/sales/new",
        params: []
    },
    sale: {
        path: "/sales/:mintKey",
        params: [
            "mintKey"
        ]
    },
    newLbc: {
        path: "/launchpad/lbcs/new",
        params: []
    },
    tokenLbc: {
        path: "/lbcs/token-offering/:mintKey",
        params: [
            "mintKey"
        ]
    },
    mintLbc: {
        path: "/lbcs/mint/:candyMachineId",
        params: [
            "candyMachineId"
        ]
    },
    tokenOffering: {
        path: "/token-offering/:mintKey",
        params: [
            "mintKey"
        ]
    },
    swap: {
        path: "/swap/:mintKey?fanoutKey=:fanoutKey",
        params: [
            "mintKey",
            "fanoutKey"
        ]
    },
    newFullyManaged: {
        path: "/launchpad/fully-managed/new",
        params: []
    },
    newManual: {
        path: "/launchpad/manual/new",
        params: []
    },
    launchpad: {
        path: "/launchpad",
        params: []
    },
    create: {
        path: "/launchpad/create",
        params: []
    },
    sell: {
        path: "/launchpad/sell",
        params: []
    }
};
function rmUndefined(obj) {
    return Object.keys(obj).reduce((acc, key)=>{
        if (typeof obj[key] !== "undefined") acc[key] = obj[key];
        return acc;
    }, {
    });
}
function route1(route, params = {
}) {
    const subbed = route.params.reduce((acc, param)=>{
        if (params[param]) {
            const ret = acc.replaceAll(`:${param}`, params[param]);
            delete params[param];
            return ret;
        }
        return acc;
    }, route.path);
    const search =  false && 0;
    const currQuery = new URLSearchParams(search || "");
    const cluster = currQuery.get("cluster");
    if (cluster) {
        params.cluster = cluster;
    }
    const nextQuery = new URLSearchParams(rmUndefined(params)).toString();
    return subbed + (nextQuery ? `?${nextQuery}` : "");
}



/***/ })

};
;