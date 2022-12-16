import { hasText } from './Object';
export function treatCentsToDecimal(value: any) {
  if (!isNumber(value)) {
    return 0.0;
  }
  return Number((value / 100).toFixed(2));
}

export function treatToCents(value: any) {
  if (!isNumber(value)) {
    return 0.0;
  }
  return Number(value.toFixed(2)) * 100;
}

export function isNumber(value: any): boolean {
  return hasText(value) && (typeof value == 'number' || hasText(Number(value)));
}
