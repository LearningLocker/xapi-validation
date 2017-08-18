import { Path, Warning } from 'rulr';
export default class RawMoreThanMaxWarning extends Warning {
    raw: number;
    max: number;
    constructor(data: any, path: Path, raw: number, max: number);
}
