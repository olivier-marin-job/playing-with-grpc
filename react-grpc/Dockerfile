FROM node:lts-gallium

WORKDIR /app

COPY node_modules ./node_modules
COPY build ./build
COPY src ./src
COPY public ./public

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
COPY servers.json ./servers.json

COPY docker-entrypoint.sh ./docker-entrypoint.sh
RUN chmod +x ./docker-entrypoint.sh

ENTRYPOINT ["./docker-entrypoint.sh"]