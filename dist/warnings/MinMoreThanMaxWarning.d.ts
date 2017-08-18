import { Path, Warning } from 'rulr';
export default class MinMoreThanMaxWarning extends Warning {
    min: number;
    max: number;
    constructor(data: any, path: Path, min: number, max: number);
}
