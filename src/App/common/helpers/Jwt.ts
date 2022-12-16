import { getMonth, getYear } from '@Helpers/Date';
import { MD5 } from 'crypto-js';
import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8';

export const jwtConstants = {
  secret: getSecret()
};

function getSecret() {
  const secret = Base64.stringify(
    Utf8.parse(
      MD5(
        getYear() +
          '-' +
          getMonth() +
          process.env.JWT_SECRET +
          'm@t1z&'.toUpperCase()
      ).toString()
    )
  );
  return secret;
}

export function decodeJwtSecret(secret: string) {
  return Utf8.stringify(Base64.parse(secret));
}
