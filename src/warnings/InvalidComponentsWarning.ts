import { Path, Warning } from 'rulr';

export default class InvalidComponentsWarning extends Warning {
  constructor(data: any, path: Path, public invalidComponents: string[]) {
    super(data, path);
  }
}
