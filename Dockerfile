# Use current version of node
FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 5000

# Use Dockerize to stall npm start
RUN apt-get update && apt-get install -y wget

CMD ["npm", "start" ]
