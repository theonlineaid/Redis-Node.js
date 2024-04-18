
import redis from "./../client.js";

export default async function sets() {
    try {
        
        await redis.sadd('ip', 1)
        await redis.sadd('ip', 2)
        await redis.sadd('ip', 3)
        const rm = await redis.srem('ip', 1)
        const result = await redis.sismember('ip', 2);
        console.log(result);

    } catch (error) {
        console.error("Error setting value in Redis:", error);
    }
}
