FROM node:14

WORKDIR /usr/src/react-app/

COPY package*.json ./

RUN npm install

COPY ./src ./
COPY ./public ./

COPY ./src/* ./src/
COPY ./public/* ./public/

EXPOSE 3000

CMD npm start