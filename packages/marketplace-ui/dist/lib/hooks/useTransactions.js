"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTransactions = void 0;
const wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
const react_1 = require("@strata-foundation/react");
const react_2 = require("react");
function getSignatures(connection, address, until, lastSignature, maxSignatures = 1000) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!connection || !address) {
            return [];
        }
        const fetchSize = Math.min(1000, maxSignatures);
        const signatures = yield connection.getSignaturesForAddress(address, {
            before: lastSignature,
            limit: fetchSize,
        });
        const withinTime = signatures.filter(sig => (sig.blockTime || 0) > (((until === null || until === void 0 ? void 0 : until.valueOf()) || 0) / 1000));
        if (withinTime.length == 1000) {
            return [
                ...withinTime,
                ...(yield getSignatures(connection, address, until, signatures[signatures.length - 1].signature, maxSignatures)),
            ];
        }
        return withinTime;
    });
}
function hydrateTransactions(connection, signatures) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!connection) {
            return [];
        }
        const sorted = signatures.sort((a, b) => (b.blockTime || 0) - (a.blockTime || 0));
        return (yield Promise.all(sorted.map((s) => __awaiter(this, void 0, void 0, function* () {
            const ret = yield connection.getTransaction(s.signature);
            // @ts-ignore
            ret.signature = s.signature;
            return ret;
        })))).filter(react_1.truthy);
    });
}
const useTransactions = ({ numTransactions, until, address }) => {
    const { connection } = (0, wallet_adapter_react_1.useConnection)();
    const [loadingInitial, setLoadingInitial] = (0, react_2.useState)(true);
    const [loadingMore, setLoadingMore] = (0, react_2.useState)(false);
    const [error, setError] = (0, react_2.useState)();
    const [transactions, setTransactions] = (0, react_2.useState)([]);
    const addrStr = (0, react_2.useMemo)(() => address === null || address === void 0 ? void 0 : address.toBase58(), [address]);
    (0, react_2.useEffect)(() => {
        (() => __awaiter(void 0, void 0, void 0, function* () {
            setLoadingInitial(true);
            setTransactions([]);
            try {
                const signatures = yield getSignatures(connection, address, until, undefined, numTransactions);
                setTransactions(yield hydrateTransactions(connection, signatures));
            }
            catch (e) {
                setError(e);
            }
            finally {
                setLoadingInitial(false);
            }
        }))();
    }, [connection, addrStr, until, setTransactions, numTransactions]);
    const fetchMore = (num) => __awaiter(void 0, void 0, void 0, function* () {
        setLoadingMore(true);
        try {
            const lastTx = transactions[transactions.length - 1];
            const signatures = yield getSignatures(connection, address, until, lastTx && lastTx.transaction.signatures[0], num);
            const newTxns = yield hydrateTransactions(connection, signatures);
            setTransactions((txns) => [...txns, ...newTxns]);
        }
        catch (e) {
            setError(e);
        }
        finally {
            setLoadingMore(false);
        }
    });
    const fetchNew = (num) => __awaiter(void 0, void 0, void 0, function* () {
        setLoadingMore(true);
        try {
            const earlyTx = transactions[0];
            const earlyBlockTime = earlyTx && earlyTx.blockTime;
            let lastDate = until;
            if (earlyBlockTime) {
                const date = new Date(0);
                date.setUTCSeconds(earlyBlockTime);
                lastDate = date;
            }
            const signatures = yield getSignatures(connection, address, lastDate, undefined, num);
            const newTxns = yield hydrateTransactions(connection, signatures);
            setTransactions((txns) => [...newTxns, ...txns]);
        }
        catch (e) {
            setError(e);
        }
        finally {
            setLoadingMore(false);
        }
    });
    return {
        transactions,
        error,
        loadingInitial,
        loadingMore,
        fetchMore,
        fetchNew
    };
};
exports.useTransactions = useTransactions;
//# sourceMappingURL=useTransactions.js.map