FROM node:20 AS build

WORKDIR /usr/src/backend

COPY package*.json ./

RUN npm install

COPY . /usr/src/backend

EXPOSE 5000

CMD ["npm", "run", "start:dev"]

