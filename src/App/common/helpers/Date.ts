export function treatStringToDate(value: string) {
  return new Date(value);
}

export function getMonth() {
  const now = new Date();
  return String(now.getMonth() + 1);
}

export function getYear() {
  const now = new Date();
  return String(now.getFullYear());
}

export function getTimestampSeconds(seconds: number) {
  return Math.floor(Date.now() / 1000) + seconds;
}

export function getSecondsFromDays(days: string) {
  const daysNumber = Number(days.replace('d', ''));
  return 3600 * 24 * daysNumber;
}
