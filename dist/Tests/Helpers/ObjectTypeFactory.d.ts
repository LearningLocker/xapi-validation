import 'mocha';
import Test from '../Helpers/Test';
export declare type Type = (test: Test) => any;
export declare type Types = {
    [key: string]: Type;
};
declare var _default: (types: Types, defaultType: string, test: Test) => void;
export default _default;
