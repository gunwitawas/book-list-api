const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const books = require('./routes/book');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/books', books);

const port = 8080;

app.listen(port, () => console.log('server run listening on port ' + port));