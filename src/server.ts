import express from "express";

const app = express();
const port = 8000;
const axios = require('axios').default;
app.use(express.json());
const router = express.Router();

function getTest() {
    router.get('/test', (req, res) => res.send('Hello world !'));
}

function getRovers() {
    router.get('/rovers', async (req, res) => {
        const response = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=JNR9awxzjUepQol1eiBftwJUzy8x706n11max7GA');
        res.send(response.data);
    });
}

getTest();
getRovers();
app.use('/', router);

app.listen(port, () => {
    console.log(`Test backend is running on port ${port}`);
});
