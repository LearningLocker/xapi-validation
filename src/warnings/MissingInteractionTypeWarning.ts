import { Path, Warning } from 'rulr';

export default class MissingInteractionTypeWarning extends Warning {
  constructor(data: any, path: Path) {
    super(data, path);
  }
}
