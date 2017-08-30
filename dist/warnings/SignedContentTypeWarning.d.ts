import { Path, Warning } from 'rulr';
export default class SignedContentTypeWarning extends Warning {
    contentType: string;
    constructor(data: any, path: Path, contentType: string);
}
