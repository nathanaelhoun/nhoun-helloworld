FROM mhart/alpine-node:8 as builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --production

COPY . .

FROM mhart/alpine-node:slim-8

COPY --from="builder" /app .

CMD node index.js
