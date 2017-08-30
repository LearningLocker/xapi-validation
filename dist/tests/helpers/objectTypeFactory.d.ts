import 'mocha';
import Test from '../helpers/test';
export declare type Type = (test: Test) => any;
export declare type Types = {
    [key: string]: Type;
};
declare const _default: (types: Types, defaultType: string, test: Test, validDefaultData: object) => void;
export default _default;
