FROM node:10.5-jessie

WORKDIR /usr/app
RUN mkdir ./src

COPY ./package.json ./

RUN npm install --quite

COPY . .