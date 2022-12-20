export function isFullString(value: any) {
  return (
    value !== undefined &&
    value !== null &&
    typeof value === 'string' &&
    value.match(/(?=\S)[^\\]+/)?.length !== undefined
  );
}

export function treatString(value: any): string {
  if (isFullString(value)) {
    return value;
  }
  return '';
}
