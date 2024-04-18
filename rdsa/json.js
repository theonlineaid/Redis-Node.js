import redis from "./../client.js";

export default async function json() {
    // try {
        // JSON data to be sent to Redis
        const jsonData = { message: 'Hello, world!' };

        // Convert JSON data to a string
        const jsonString = JSON.stringify(jsonData);

        // Set JSON data in Redis
        const result = await redis.set('msg', '$',  jsonString);
        console.log(result);
    // } 
}
