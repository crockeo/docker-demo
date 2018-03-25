FROM alpine:latest

###
# Installing the relevant software.
RUN apk update
RUN apk add --no-cache mysql mysql-client nodejs

###
# Setting up MySQL.
RUN mysql_install_db --user=mysql --datadir=/var/lib/mysql
RUN mkdir /run/mysqld
RUN chmod 0755 /run/mysqld
RUN chown mysql:mysql /run/mysqld

###
# Creating the project's working directory.
RUN mkdir -p /docker-demo/src
WORKDIR /docker-demo

###
# Deploying project files.
COPY startup.sh .
COPY package-lock.json .
COPY package.json .
COPY src/ ./src

###
# Installing NPM packages.
RUN npm install

###
# Running the application.
CMD [ "./startup.sh" ]
