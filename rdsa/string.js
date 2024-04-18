import redis from "./../client.js";

export default async function string() {
    try {
        const result = await redis.get('name:1');
        console.log(result);

    } catch (error) {
        console.error("Error setting value in Redis:", error);
    }
}



