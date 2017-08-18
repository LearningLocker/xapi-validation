import { Path, Warning } from 'rulr';
export default class RawLessThanMinWarning extends Warning {
    raw: number;
    min: number;
    constructor(data: any, path: Path, raw: number, min: number);
}
