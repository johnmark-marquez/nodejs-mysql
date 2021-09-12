# THIS IS THE README FOR NODEJS-MYSQL

For initial setup, run `npm install` to install the packages of the project.

# DOCKER CONTAINER FOR MYSQL DATABASE
Check if your machine already has Docker by typing in the terminal `docker`.

Be sure to install Docker if you haven't installed it already, go to `https://docs.docker.com/get-docker/` to start installing Docker.

As for our database, create a MySQL Docker container for us to store data. 

Deploy the MySQL container using the command `docker run --name [name_of_your_choice] -p 3306:3306 -e MYSQL_ROOT_PASSWORD=[password] -d mysql:latest`

Docker will then setup your container and download the necessary image for the container.

# POPULATING THE USER TABLE

Populate the MySQL database using the command `npm run db:reset`. It will start creating the `User` table and populate the table with some sample data.

# RUNNING THE NODEJS API

After populating the database, run `npm start` on the terminal to run the server.

# RUNNING TEST SCRIPTS
To test the API scripts, run `npm test`. This includes all the scripts regarding the API, `Get Users`, `Create User`, `Update User`, `Delete User`, `Bulk Delete`. It will automatically run a script that create a new database specifically for testing purposes as well.

