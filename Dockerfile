FROM node:11.4.0-alpine

 

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

CMD [“node”, “app.js”]

EXPOSE 3000