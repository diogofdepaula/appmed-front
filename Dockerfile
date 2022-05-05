FROM node:alpine

WORKDIR /home/diogo/front

COPY package*.json ./

RUN npm install

COPY . .

# EXPOSE 3000

# CMD ["npm", "start"]