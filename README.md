# TP-VIRTUALIZATION-DOCKER

Repository for a work done in a Docker class. The repository consists of a dockerized project with a back-end, a database and a front-end. 

Mongo was used as the database
NodeJS for back-end
ReactJS for the front-end


# How to install the project

Make sure you have docker and docker-compose installed on your machine. 
you can then just navigate to the root of the project fill in an appropriate .env file and use the command `docker-compose up`

The project should launch themselves and should be accessible at the ports 4300 for the back-end and 4301 for the front-end.


## .ENV setup

A .env file must be created for the project to work. The file must be filled with 3 variables : 

 - DATABASE_NAME
 - DATABASE_USER
 - DATABASE_PASSWORD

There is no specifications on what the values of these variables should be.

## API Endpoints

The Node API serves 2 simple testing endpoints : 

 - '/' the default one which responds with a simple 'Hello World'
 - '/books' which send a list of books that was added to the database

## Front-end content

The front-end is really simple. on the press of the only button on the page the application makes a call to the "books" endpoint of the API.