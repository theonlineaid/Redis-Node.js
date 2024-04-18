
import Redis from 'ioredis';

const redis = new Redis({
    host: 'localhost', // Or the IP address of your Redis container
    port: 6377,        // Redis container's port (8001 mapped to 6377)
});

// Error handling
;

export default redis;