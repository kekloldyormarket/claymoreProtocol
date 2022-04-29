import { PublicKey, TransactionResponse } from "@solana/web3.js";
interface ITransactions {
    error: Error | undefined;
    loadingInitial: boolean;
    loadingMore: boolean;
    transactions: TransactionResponse[];
    fetchMore(num: number): void;
    fetchNew(num: number): void;
}
export declare const useTransactions: ({ numTransactions, until, address }: {
    numTransactions: number;
    until?: Date | undefined;
    address?: PublicKey | undefined;
}) => ITransactions;
export {};
//# sourceMappingURL=useTransactions.d.ts.map