import { Path, Warning } from 'rulr';

export default class TypeWarning extends Warning {
  constructor(data: any, path: Path, public typeName: string) {
    super(data, path);
  }
}

export const createTypeWarning = (typeName: string) => {
  return (data: any, path: Path): Warning => {
    return new TypeWarning(data, path, typeName);
  };
};
