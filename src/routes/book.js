var express = require('express');
var router = express.Router();
var controller = require('../controllers/bookController');

router.get('/book', controller.getBookList);

module.exports = router;