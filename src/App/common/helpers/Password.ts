import * as bcrypt from 'bcrypt';

export function treatPassword(value: string | undefined): string {
  if (!value) {
    value = ''
  }
  return bcrypt.hashSync(value, bcrypt.genSaltSync(10));
}

export function hasValidPassword(
  value: string,
  hash_password: string
): boolean {
  return bcrypt.compareSync(value, hash_password);
}
