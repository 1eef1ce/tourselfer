FROM node:12

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install PM2 globally
RUN npm install --global pm2

# Installing dependencies
COPY ./src/app/package*.json /usr/src/app/
RUN npm install

# Copying source files
COPY ./src/app /usr/src/app

# Building app
RUN npm run build
EXPOSE 3000

# Run container as non-root (unprivileged) user
# The "node" user is provided in the Node.js Alpine base image
USER node

# Launch app with PM2
CMD [ "pm2-runtime", "start", "npm", "--", "start" ]