import { PublicKey } from "@solana/web3.js";
export declare function useBountyInfo(mintKey: PublicKey | undefined): {
    info: {
        name: string | undefined;
        image: string | undefined;
        createdAt: Date | undefined;
        description: string | undefined;
        fundsHaveBeenUsed: boolean | undefined;
        bountyClosed: boolean | undefined;
        contributed: number | undefined;
        attributes: Record<string, string | number> | undefined;
        isNormalBounty: boolean;
    };
    loading: boolean;
};
//# sourceMappingURL=useBountyInfo.d.ts.map