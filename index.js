const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 25581;
const mainrouter = require('./main.js');

app.enable('trust proxy');
app.set('json spaces', 2);
app.use(cors());


app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`);
  next();
});

app.use('/', mainrouter);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.listen(port, () => {
  console.log(`Servidor rodando em http://nxf-01.nexfuture.com.br:${port}`);
});
