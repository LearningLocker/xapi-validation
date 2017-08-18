import { Rule } from 'rulr';
export declare type Types = {
    [key: string]: Rule;
};
declare const _default: (types: () => Types, defaultType: string) => Rule;
export default _default;
