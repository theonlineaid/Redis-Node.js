
import Redis from 'ioredis';

const redis = new Redis({
    host: 'localhost', // Or the IP address of your Redis container
    port: 6377,        // Redis container's port (8001 mapped to 6377)
});

// async function resetData() {
//     try {
//         // Flush all data from Redis
//         await redis.flushall();
//         console.log('Redis data reset successfully');
//     } catch (error) {
//         console.error('Error resetting Redis data:', error);
//     } finally {
//         redis.quit(); // Close the Redis connection when done
//     }
// }

// resetData();

export default redis;