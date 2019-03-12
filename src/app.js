const express = require('express');
const bodyParser = require('body-parser');
const db = require('../config/dbconnect')();

const app = express();
const router = express.Router();

//Conecta ao Banco
db.dbconnect;

//Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;
