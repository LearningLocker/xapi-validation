import { Path, Warning } from 'rulr';

export default class RawLessThanMinWarning extends Warning {
  constructor(data: any, path: Path, public raw: number, public min: number) {
    super(data, path);
  }
}
