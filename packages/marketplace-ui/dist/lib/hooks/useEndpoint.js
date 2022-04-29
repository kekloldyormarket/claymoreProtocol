"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEndpoint = exports.getClusterAndEndpoint = void 0;
const react_1 = require("@strata-foundation/react");
const components_1 = require("../components");
const wallet_adapter_base_1 = require("@solana/wallet-adapter-base");
const react_2 = require("react");
const shortnames = new Set([
    "localnet",
    ...Object.values(wallet_adapter_base_1.WalletAdapterNetwork).map((v) => v.toString()),
]);
function getClusterAndEndpoint(clusterOrEndpoint) {
    if (clusterOrEndpoint) {
        return {
            cluster: "mainnet-beta",
            endpoint: "https://ssc-dao.genesysgo.net/",
        };
    }
    return { cluster: "mainnet-beta", endpoint: components_1.DEFAULT_ENDPOINT };
}
exports.getClusterAndEndpoint = getClusterAndEndpoint;
function useEndpoint() {
    const [clusterOrEndpoint, setCluster] = (0, react_1.useQueryString)("cluster", components_1.DEFAULT_ENDPOINT);
    const { cluster: actualCluster, endpoint } = (0, react_2.useMemo)(() => getClusterAndEndpoint(clusterOrEndpoint), [clusterOrEndpoint]);
    return {
        cluster: actualCluster,
        endpoint,
        setClusterOrEndpoint: setCluster,
    };
}
exports.useEndpoint = useEndpoint;
//# sourceMappingURL=useEndpoint.js.map