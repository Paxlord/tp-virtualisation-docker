FROM node:14

# Setting up the work dir to a container folder
WORKDIR /usr/src/node-app/

# Putting the sources of the project into the project folder on the container
COPY src ./
COPY ./index.js ./

# Puttin the list of dependancies into the project folder on the container
COPY package*.json ./

#Installing the dependancies 
RUN npm install

#Exposing the port the express instance will run on
EXPOSE 8080

#Running the instance of the server
CMD npm run start