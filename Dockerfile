FROM node:lts

WORKDIR /usr/src/app

COPY package.json ./
COPY prisma ./prisma/
COPY tsconfig.json ./

COPY . .

RUN apt-get -qy update && apt-get -qy install openssl
RUN npm install -g npm@latest
RUN npx prisma generate

EXPOSE 3333

RUN npm run build

CMD ["npm", " run" , "start:prod"]
