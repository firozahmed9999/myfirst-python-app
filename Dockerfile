# it will take base image from dockerhub (ligtweight image)
FROM node:18-alpine

#it will create a container , move in a folder called /app
WORKDIR /app

# copy karo  package.json ko , from my laptop into container
COPY package*.json ./

#installing npm package in the container
RUN npm install

#copy all project files into container
COPY ..

#expose kr do port 3000
Expose 3000

CMD ["npm","start"]


