import { Path, Warning } from 'rulr';

export default class MinMoreThanMaxWarning extends Warning {
  constructor(data: any, path: Path, public min: number, public max: number) {
    super(data, path);
  }
}
