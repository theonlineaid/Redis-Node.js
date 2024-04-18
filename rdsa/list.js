
import redis from "./../client.js";

export default async function list() {
    try {
        
        // await redis.lpush('msg', 1)
        // await redis.lpush('msg', 2)
        // await redis.lpush('msg', 3)
        // await redis.lpush('msg', 4)
        // await redis.lpush('msg', 5)
        const result = await redis.rpop('msg');
        console.log(result);

    } catch (error) {
        console.error("Error setting value in Redis:", error);
    }
}
