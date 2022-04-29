import { GetBountyItem, MarketplaceSdk } from "@strata-foundation/marketplace-sdk";
import { PublicKey } from "@solana/web3.js";
import { MetadataData } from "@metaplex-foundation/mpl-token-metadata";
import { IMetadataExtension } from "@strata-foundation/spl-utils";
export declare type SortType = "GO_LIVE" | "CONTRIBUTION";
export declare type SortDirection = "ASC" | "DESC";
declare type EnrichedBountyItem = GetBountyItem & {
    tokenMetadata?: MetadataData;
    data?: IMetadataExtension;
    attributes?: Record<string, string | number>;
};
export declare function useBounties({ search, baseMint, sortType, sortDirection, limit, }: {
    search?: string;
    baseMint?: PublicKey;
    sortType?: SortType;
    sortDirection?: SortDirection;
    limit?: number;
}): {
    result: EnrichedBountyItem[] | undefined;
    status: import("react-async-hook").AsyncStateStatus;
    loading: boolean;
    error: Error | undefined;
    set: (value: import("react-async-hook").AsyncState<GetBountyItem[] | undefined>) => void;
    merge: (value: Partial<import("react-async-hook").AsyncState<GetBountyItem[] | undefined>>) => void;
    reset: () => void;
    execute: (marketplaceSdk: MarketplaceSdk | undefined, baseMint: PublicKey | undefined) => Promise<GetBountyItem[] | undefined>;
    currentPromise: Promise<GetBountyItem[] | undefined> | null;
    currentParams: [marketplaceSdk: MarketplaceSdk | undefined, baseMint: PublicKey | undefined] | null;
};
export {};
//# sourceMappingURL=useBounties.d.ts.map