const express = require('express');
const bodyParser = require('body-parser');

var mongoose = require('mongoose');
var mongoDB = 'mongodb://139.5.145.96:27017/bookdatabase';
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const routes = require('./src/route')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', routes());

const port = 8080;

app.listen(port, () => console.log('server run listening on port ' + port));