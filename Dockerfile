FROM node:argon

# Create app directory
RUN mkdir -p /srv/docker/src/app
WORKDIR /srv/docker/src/app

# Install app dependencies
COPY package.json /srv/docker/src/app/
RUN npm install

# Bundle app source
COPY . /srv/docker/src/app

EXPOSE 8080
CMD [ "npm", "start" ]


