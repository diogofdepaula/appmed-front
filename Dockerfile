FROM node:19-alpine

WORKDIR /usr/src/front

COPY package*.json ./

RUN npm install -g npm@9.6.4

RUN npm install

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . .

# EXPOSE 3000

# CMD ["npm", "start"]