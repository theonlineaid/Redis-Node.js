# Setting Up Redis and Node.js Application

## Running Redis Container

To run the Redis container, use the following Docker command: `docker run -d --name redis-stack -p 6377:6379 -p 8001:8001 redis/redis-stack:latest`. This command starts a Redis container named `redis-stack` with port mappings for Redis default port `6379` (mapped to host port `6377`) and custom port `8001` (mapped to host port `8001`). To access the Redis CLI, use the following command: `docker exec -it redis-stack redis-cli`.

## Setting Up Node.js Application

To set up the Node.js application, follow these steps:

1. Install dependencies: 

This will install the required dependencies for your Node.js application, including `ioredis` and `nodemon`.

```
npm install ioredis
npm install nodemon

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
},

npm start
```
2. After run your container

```
docker run -d --name redis-stack -p 6377:6379 -p 8001:8001 redis/redis-stack:latest
docker exec -it redis-stack redis-cli

```