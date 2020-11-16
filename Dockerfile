FROM node:14-slim

LABEL author="Anderson Rostirolla"

COPY . /usr/src/api-omdb

WORKDIR /usr/src/api-omdb

RUN npm install

EXPOSE 8080

ENTRYPOINT npm start