import { WebAuth, AuthOptions } from "auth0-js";
export declare const auth0Options: AuthOptions;
export declare const auth0: WebAuth;
export declare function useLinkTwitter(redirectUri?: string): {
    redirectUri: string;
    execute: () => void;
};
//# sourceMappingURL=useLinkTwitter.d.ts.map