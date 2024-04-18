import express from 'express';
import axios from 'axios';
import string from "./rdsa/string.js";
import list from "./rdsa/list.js";
import sets from "./rdsa/sets.js";
import redis from './client.js';


const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;
app.get('/', async (req, res) => {
    try {
        // Check if data is cached in Redis
        const cachedData = await redis.json.get('data', '.');

        if (cachedData) {
            return res.json(cachedData); // Send cached JSON data to client
        }
        
        // Fetch data from external API
        const { data } = await axios.get("https://dummyjson.com/products");

        // Cache fetched JSON data in Redis
        await redis.json.set('data', '.', data);

        // Set expiration for the cached data
        await redis.expire('data', 50);

        // Send fetched JSON data to client
        return res.json(data);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});


// app.get('/', async (req, res) => {
//     const cachValues = await redis.get('data')
    
//     if (cachValues) {
//         return res.send(cachValues);
//     }
    
//     const {data} = await axios.get("https://dummyjson.com/products");

//     await redis.set('data', data);
//     await redis.expire('data', 50);

//     return res.send(data);
// })

app.listen(port,  () => console.log(`server run ${port}..`));

// string()
// list();
// sets();
