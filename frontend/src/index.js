const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Sirve el archivo index.html que está en la carpeta superior
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// Indica que el servidor está escuchando
app.listen(port, () => {
  console.log(`Frontend service listening at http://localhost:${port}`);
});