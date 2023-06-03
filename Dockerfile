FROM --platform=linux/amd64 node:20

COPY . .

RUN chmod +x docker-entrypoint.sh
RUN ./docker-entrypoint.sh
