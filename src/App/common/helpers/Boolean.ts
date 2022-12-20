export function treatStringToBoolean(value: string) {
  return value == 'T';
}

export function treatBooleanToString(value: boolean) {
  return value == true ? 'T' : 'F';
}
