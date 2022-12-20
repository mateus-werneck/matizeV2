import * as bcrypt from 'bcrypt';

export function treatPassword(value: string | undefined): string | null {
  if (!value) {
    return null;
  }
  return bcrypt.hashSync(value, bcrypt.genSaltSync(10));
}

export function hasValidPassword(
  value: string,
  hash_password: string
): boolean {
  return bcrypt.compareSync(value, hash_password);
}
