FROM node:carbon

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app
RUN yarn install --silent
