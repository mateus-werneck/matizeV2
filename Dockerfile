###################
# BUILD FOR LOCAL DEVELOPMENT
###################
FROM node:18-alpine AS development

WORKDIR /usr/src/app

COPY --chown=node:node package.json yarn.lock ./
COPY --chown=node:node prisma ./prisma/
COPY --chown=node:node tsconfig.json ./

RUN yarn install --frozen-lockfile
RUN yarn prisma generate

COPY --chown=node:node . .

USER node

###################
# BUILD FOR PRODUCTION
###################

FROM node:lts AS build

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
