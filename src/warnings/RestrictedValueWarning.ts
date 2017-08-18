import { Path, Warning } from 'rulr';

export default class RestrictedValueWarning extends Warning {
  constructor(data: any, path: Path, public requiredValue: any) {
    super(data, path);
  }
}
