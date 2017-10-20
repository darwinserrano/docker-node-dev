FROM node:latest

COPY . /app

WORKDIR /app

RUN npm install

EXPOSE 5000

CMD [ "npm", "start" ]
# CMD [ "DEBUG=node-docker-test", "npm", "start" ]
# RUN DEBUG=node-docker-test:* npm start