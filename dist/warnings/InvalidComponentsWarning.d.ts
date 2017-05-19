import { Path, Warning } from 'rulr';
export default class InvalidComponentsWarning extends Warning {
    invalidComponents: string[];
    constructor(data: any, path: Path, invalidComponents: string[]);
}
