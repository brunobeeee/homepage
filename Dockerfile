# development builder
FROM node:20 AS development

WORKDIR "/com.docker.devenvironments.code"

COPY package*.json ./

RUN npm install

RUN npm install --arch=arm64 --platform=linuxmusl sharp

# development runner (ARM/M1 compatible)
FROM --platform=linux/amd64 node:20 AS runner

WORKDIR "/com.docker.devenvironments.code"

COPY --from=development . .

COPY auth/sshkey auth/sshkey

RUN eval $(ssh-agent) && ssh-add auth/ionos

