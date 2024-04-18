import express from 'express';
import axios from 'axios';
import client from './client.js';


const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;


app.get('/', async (req, res) => {
    try {
        // Check if data is cached in client
        const cachedData = await client.json.get('data', '.');

        if (cachedData) {
            return res.json(cachedData); // Send cached JSON data to client
        }
        
        // Fetch data from external API
        const { data } = await axios.get("https://dummyjson.com/products");

        // Cache fetched JSON data in client
        await client.json.set('data', '.', data);

        // Set expiration for the cached data
        // await client.expire('data', 50);

        // Send fetched JSON data to client
        return res.json(data);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.listen(port,  () => console.log(`server run ${port}..`));