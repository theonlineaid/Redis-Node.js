import redis from "./client.js";

async function init() {
    try {
        const result = await redis.get('name:2');
        console.log(result);

    } catch (error) {
        console.error("Error setting value in Redis:", error);
    }
}

init();


