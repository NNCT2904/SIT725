FROM node:14.17-buster-slim as base
WORKDIR /src

#############
# Dev image #
#############

FROM base as dev
COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
