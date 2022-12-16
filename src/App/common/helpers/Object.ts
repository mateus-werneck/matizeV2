import { validate } from 'uuid';

export function isValidObject(object: any): boolean {
  return (
    typeof object === 'object' &&
    object !== undefined &&
    object !== null &&
    Object.keys(object).length > 0
  );
}

export function hasMatizeId(object: any): boolean {
  return (
    isValidObject(object) &&
    hasText(object['matizeId']) &&
    validate(object['matizeId'])
  );
}

export function hasText(value: any): boolean {
  return (
    value !== undefined &&
    value !== null &&
    value !== '' &&
    value !== ' ' &&
    value
  );
}

export function treatObject(object: object): void {
  Object.keys(object).forEach((prop) => {
    if (!hasText(object[prop]) || object[prop] === 0) {
      delete object[prop];
    }
  });
}
