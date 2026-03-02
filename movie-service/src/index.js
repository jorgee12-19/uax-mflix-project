const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();

app.use(cors());
const PORT = process.env.PORT || 3000;
const URI = "mongodb+srv://jorge14:admin4@cluster0.asn1o.mongodb.net/"; // Factor III: Configuración
const client = new MongoClient(URI);

app.get('/movies', async (req, res) => {
    try {
        await client.connect();
        const movies = await client.db("sample_mflix").collection("movies").find().limit(10).toArray();
        res.json(movies);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.listen(PORT, () => console.log(`Movie Service running on port ${PORT}`));