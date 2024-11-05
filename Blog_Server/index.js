import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import pkg from 'pg';

const{ Pool } = pkg;

dotenv.config();

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

//I need to get the email from my front end, so figure out syntax
app.post('/api/subscribe', async (req, res) => {
    try {
    const { email } = req.body;
    const result = await pool.query(
        "Insert into mailing_list (email) values($1) returning *",
        [email]
    );
    res.status(200).json("successfully subscribed");
    }
    catch (error) {
        res.status(500).json("error");
        console.log(error);
    }
});


app.post("/api/search", async (req, res) => {
    //receive search params
    const userSearch = req.body.search
    const params = new URLSearchParams()
    params.append('query', userSearch)
    params.append('client_id', process.env.CLIENT_ID)
    console.log("A")
    console.log(params)
    const dataFetch = await fetch(`https://api.unsplash.com/search/photos/?${params}`)
    const photos = (await dataFetch.json()).results
    res.json(photos)

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});