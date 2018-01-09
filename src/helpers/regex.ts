export const escapedChar = (char: string) => {
  return `\\${char}`;
};

export const capturePattern = (pattern: string) => {
  return `(${pattern})`;
};

export const delimitedPattern = (pattern: string, delimeter: string) => {
  return `(?:${pattern})(?:${escapedChar(delimeter)}${pattern})*`;
};

export const prefixedPattern = (prefix: string, pattern: string) => {
  return `${escapedChar(prefix)}(${pattern})`;
};

export const optionalPattern = (pattern: string) => {
  return `(?:${pattern})?`;
};
