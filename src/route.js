const express = require('express');
const routes = express.Router();

module.exports = () => {
    const bookRoute = require('./routes/book')
    routes.use('/book', bookRoute)

    return routes
}