# development builder
FROM node:20 AS development

COPY package*.json ./

RUN npm install

RUN npm install --arch=arm64 --platform=linuxmusl sharp

# development runner (ARM/M1 compatible)
FROM --platform=linux/arm64 node:20 AS runner

COPY --from=development . .

WORKDIR /usr/src/app
