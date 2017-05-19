import { Path, Warning } from 'rulr';
export default class TypeWarning extends Warning {
    typeName: string;
    constructor(data: any, path: Path, typeName: string);
}
export declare const createTypeWarning: (typeName: string) => (data: any, path: string[]) => Warning;
