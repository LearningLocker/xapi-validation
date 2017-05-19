import { Path, Warning } from 'rulr';
export default class IfiCountWarning extends Warning {
    usedIfis: string[];
    constructor(data: any, path: Path, usedIfis: string[]);
}
