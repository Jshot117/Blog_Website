import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(bodyParser.json());


//I need to get the email from my front end, so figure out syntax
app.post('/api/subscribe', (req, res) => {
    const { email } = req.body;
    console.log(email);
    res.json({message: "subscribed successsfully"})
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});