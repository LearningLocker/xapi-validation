import { Path, Warning } from 'rulr';

export default class VoidWarning extends Warning {
  constructor(data: any, path: Path, public voidVerbId: string) {
    super(data, path);
  }
}
