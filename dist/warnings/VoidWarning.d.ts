import { Path, Warning } from 'rulr';
export default class VoidWarning extends Warning {
    voidVerbId: string;
    constructor(data: any, path: Path, voidVerbId: string);
}
