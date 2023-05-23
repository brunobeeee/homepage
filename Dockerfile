# development builder
FROM node:20 AS development

WORKDIR "/com.docker.devenvironments.code"

COPY package*.json ./

RUN npm install

RUN npm install --arch=arm64 --platform=linuxmusl sharp

RUN pwd

RUN ls

# development runner (ARM/M1 compatible)
FROM --platform=linux/amd64 node:20 AS runner

RUN pwd

RUN ls

COPY --from=development . .

RUN ls

WORKDIR "/com.docker.devenvironments.code"

RUN pwd

RUN ls
