import { first, checkType, Rule } from 'rulr';
import { createTypeWarning } from './warnings/TypeWarning';

const checkNumber = (typeName: string, checker: (data: any) => boolean): Rule =>
  first(checkType(Number), (data, path) =>
    checker(data) ? [] : [createTypeWarning(typeName)(data, path)]
  );

export const anyValue: Rule = () => [];
export const stringValue: Rule = checkType(String);
export const booleanValue: Rule = checkType(Boolean);
export const numberValue: Rule = checkType(Number);
export const integerValue: Rule = checkNumber('Integer', data =>
  (data - Math.floor(data)) === 0
);
export const scaledValue: Rule = checkNumber('Scaled', data =>
  (-1) <= data && data <= 1
);
