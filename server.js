"use strict";

const express = require('express');
const cors = require('cors'); // Importa el módulo cors
const router = require('./controllers/router');
const app = express();
const port = 3000;

app.use(cors({
  origin: ['http://127.0.0.1:5500']
}));

app.use(express.json()); // Usa express body-parser para analizar todos los cuerpos de solicitud.
app.use('/api/users', router);

app.get('/',
  (req, res) => res.send('Hello DASWorld!')
);
app.route('/home').get(
  (req, res) => res.send('DASWorld Home')
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
