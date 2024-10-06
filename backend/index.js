const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Backend para la fundación está corriendo');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
