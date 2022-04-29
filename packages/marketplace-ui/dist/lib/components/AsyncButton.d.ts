import React from 'react';
import { ButtonProps } from "@chakra-ui/react";
export declare type AsyncButtonProps = {
    children: React.ReactNode;
    action: () => Promise<void> | undefined;
} & ButtonProps;
export declare const AsyncButton: ({ action, children, ...props }: AsyncButtonProps) => JSX.Element;
//# sourceMappingURL=AsyncButton.d.ts.map