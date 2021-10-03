FROM node:14

#Setting up the workdir
WORKDIR /usr/src/react-app/

#Transfering the dependancies list to the working directory
COPY package*.json ./

#Installing the dependancies 
RUN npm install

#Copying the folder structure to the working directory
COPY ./src ./
COPY ./public ./

#Copying the files from the directories to the folder
COPY ./src/* ./src/
COPY ./public/* ./public/

#Exposing the default development port to launch React
EXPOSE 3000

#Launching the instance of React
CMD npm start