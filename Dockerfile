# Start with a base image containing Node.js runtime
FROM node:20.9-alpine AS build

# Set the working directory in the docker image
WORKDIR /usr/src/app

# Copy package.json and yarn.lock to the root directory of the docker image
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code into the docker image
COPY . .

# Build the application
RUN npm run build

# Running stage
FROM node:20.9-alpine

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/package*.json ./

# Expose the port
EXPOSE 3000

# Provide the start up command for the docker image
CMD ["npm", "run", "start:prod"]
