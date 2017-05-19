import { Path, Warning } from 'rulr';

export default class IfiCountWarning extends Warning {
  constructor(data: any, path: Path, public usedIfis: string[]) {
    super(data, path);
  }
}
