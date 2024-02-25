import express, { Request, Response } from 'express';
import axios, { AxiosError, HttpStatusCode } from 'axios';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())

// Middleware to parse JSON bodies
app.use(express.json());

// Define API endpoint for handling API calls
app.all('/', async (req: Request, res: Response) => {
    const { url } = req.query;

    const method = req.method.toUpperCase();

    try {
        let response;

        switch (method) {
            case 'GET':
                response = await axios.get(url as string);
                break;
            case 'POST':
                response = await axios.post(url as string, req.body);
                break;
            case 'PUT':
                response = await axios.put(url as string, req.body);
                break;
            case 'UPDATE':
                response = await axios.patch(url as string, req.body);
                break;
            case 'DELETE':
                response = await axios.delete(url as string);
                break;
            default: throw new Error('Invalid HTTP method');
        }
            const responseData = response.data;
            const responseStatus = response.status;
    
            // Send only the data and status code to the client
            res.json({ data: responseData, status: responseStatus });
    } catch (error: any) {
        console.log(error);
}});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});