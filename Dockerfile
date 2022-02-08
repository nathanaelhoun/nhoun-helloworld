FROM alpine:3.15 as builder

WORKDIR /app

RUN apk add --no-cache nodejs npm

COPY package.json package-lock.json ./

RUN npm install --production

COPY . ./

CMD node index.js
