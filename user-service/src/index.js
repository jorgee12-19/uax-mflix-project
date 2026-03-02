const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();

app.use(cors());
const PORT = process.env.PORT || 3001;
const URI = "mongodb+srv://jorge14:admin4@cluster0.asn1o.mongodb.net/";
const client = new MongoClient(URI);

app.get('/users', async (req, res) => {
    try {
        await client.connect();
        const users = await client.db("sample_mflix").collection("users").find().limit(5).toArray();
        res.json(users);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.listen(PORT, () => console.log(`User Service running on port ${PORT}`));