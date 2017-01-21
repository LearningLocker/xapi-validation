export declare const subStatementError: () => (path: string[]) => string;
export declare const contextPropError: () => (path: string[]) => string;
export declare const voidError: (voidVerbId: string) => (path: string[]) => string;
export declare const membersTypeError: () => (path: string[]) => string;
export declare const membersLengthError: () => (path: string[]) => string;
export declare const noMembersError: () => (path: string[]) => string;
export declare const noIfiError: () => (path: string[]) => string;
export declare const invalidComponentsError: (invalidComponents: string[]) => (path: string[]) => string;
export declare const ifiCountError: (usedIfis: string[]) => (path: string[]) => string;
