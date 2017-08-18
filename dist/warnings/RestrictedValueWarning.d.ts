import { Path, Warning } from 'rulr';
export default class RestrictedValueWarning extends Warning {
    requiredValue: any;
    constructor(data: any, path: Path, requiredValue: any);
}
