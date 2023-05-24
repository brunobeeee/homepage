# development builder
FROM node:20 AS development

COPY package*.json ./

RUN npm install

RUN npm install --arch=arm64 --platform=linuxmusl sharp


# development runner (ARM/M1 compatible)
FROM --platform=linux/amd64 node:20 AS runner

COPY --from=development . .

WORKDIR "/com.docker.devenvironments.code"

RUN pwd

RUN ls

RUN npx parcel src/index.html
