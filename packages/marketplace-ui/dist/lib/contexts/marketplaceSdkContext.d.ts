import { MarketplaceSdk } from "@strata-foundation/marketplace-sdk";
import React from "react";
export declare const MarketplaceSdkContext: React.Context<IMarketplaceSdkReactState>;
export interface IMarketplaceSdkReactState {
    error?: Error;
    loading: boolean;
    marketplaceSdk?: MarketplaceSdk;
}
export declare const MarketplaceSdkProviderRaw: React.FC;
export declare const MarketplaceSdkProvider: React.FC;
export declare const useMarketplaceSdk: () => IMarketplaceSdkReactState;
//# sourceMappingURL=marketplaceSdkContext.d.ts.map