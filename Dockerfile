FROM node:alpine3.10

WORKDIR /usr/src/crwn-clothing

COPY ./ ./

RUN npm install

CMD ['sh']