import { Path, Warning } from 'rulr';

export default class RawMoreThanMaxWarning extends Warning {
  constructor(data: any, path: Path, public raw: number, public max: number) {
    super(data, path);
  }
}
