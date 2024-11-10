FROM node:23-alpine

RUN apk update && apk upgrade

WORKDIR /app

COPY . .
COPY pnpm-lock.yaml .
COPY package.json .

RUN npm install -g pnpm

RUN pnpm i

ENTRYPOINT [ "pnpm","vite" ]
