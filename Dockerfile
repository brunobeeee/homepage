# PRODUCTION DOCKERFILE #
FROM node:21.7.3-alpine3.18

RUN apk update && \
    apk add --no-cache lftp

WORKDIR "/homepage"

COPY homepage .

RUN npm install

RUN npm run build
