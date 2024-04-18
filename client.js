import redis from 'redis'

// Create Redis client
const client = redis.createClient({url: 'redis://localhost:6377'});
await client.connect();

// Event listeners for Redis client
client.on('connect', () => console.log('Redis client connected'));   
client.on('error', (err) => console.log('Redis connection error:', err));

export default client;