FROM --platform=linux/amd64 node:20

COPY . .

RUN ./docker-entrypoint.sh
