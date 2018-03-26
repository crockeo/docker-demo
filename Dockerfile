FROM node:latest

WORKDIR /application

COPY . .
RUN npm install
CMD node src/index.js
