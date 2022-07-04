import express from "express";
import {router} from "./router";

const app = express();
const PORT = 8000;

app.use(express.json());

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Test backend is running on port ${PORT}`);
});
