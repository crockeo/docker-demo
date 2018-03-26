FROM node:latest

WORKDIR /application

###
# Note:
#   Can be used in development for live code reload.
# RUN npm install -g nodemon

COPY . .
RUN npm install
###
# Note:
#   Can be used in development for live code reload.
# CMD nodemon -L src/index.js
CMD node src/index.js
