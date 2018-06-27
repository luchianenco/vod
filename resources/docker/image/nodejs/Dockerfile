FROM node:10.5-jessie

RUN mkdir /usr/app -p

COPY ./package.json /usr/app

WORKDIR /usr/app

RUN npm install --quite
