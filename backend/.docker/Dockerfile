FROM node:16.14-buster-slim as base
WORKDIR /src

#############
# Dev image #
#############

FROM base as dev
COPY package.json package-lock.json ./
RUN npm install

COPY . .

CMD [ "npm", "start" ]
