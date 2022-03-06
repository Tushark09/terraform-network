FROM node:16.14.0-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install mongodb@2.2 --save
RUN npm install

COPY . /usr/src/app
EXPOSE 51005
CMD ["node", "index.js"]