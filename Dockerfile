# development builder
FROM node:20 AS development

WORKDIR "/com.docker.devenvironments.code"

COPY . .

# development runner (ARM/M1 compatible)
FROM --platform=linux/amd64 node:20 AS runner
COPY --from=development . .

WORKDIR "/com.docker.devenvironments.code"
