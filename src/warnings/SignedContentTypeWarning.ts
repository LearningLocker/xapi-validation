import { Path, Warning } from 'rulr';

export default class SignedContentTypeWarning extends Warning {
  constructor(data: any, path: Path, public contentType: string) {
    super(data, path);
  }
}
