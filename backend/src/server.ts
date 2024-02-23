import express, { Request, Response } from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())

// Middleware to parse JSON bodies
app.use(express.json());

// Define API endpoint for handling API calls
app.get('/api/call-external-api', async (req: Request, res: Response) => {
    const { url } = req.query;

    try {
        // Make the actual API call to the external API
        const response = await axios.get(url as string);

        // Return the data received from the external API to the frontend
        res.json(response.data);
    } catch (error) {
        // If there's an error, return an error response
        res.status(500).json({ error: 'Failed to fetch data from external API' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
