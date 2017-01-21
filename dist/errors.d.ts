export declare const subStatementError: (data: any) => (path: string[]) => string;
export declare const contextPropError: (data: any) => (path: string[]) => string;
export declare const voidError: (voidVerbId: string, data: any) => (path: string[]) => string;
export declare const membersTypeError: (data: any) => (path: string[]) => string;
export declare const membersLengthError: (data: any) => (path: string[]) => string;
export declare const noMembersError: (data: any) => (path: string[]) => string;
export declare const noIfiError: (data: any) => (path: string[]) => string;
export declare const invalidComponentsError: (invalidComponents: string[], data: any) => (path: string[]) => string;
export declare const ifiCountError: (usedIfis: string[], data: any) => (path: string[]) => string;
