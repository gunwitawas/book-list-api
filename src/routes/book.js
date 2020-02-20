var express = require('express');
var router = express.Router();
var controller = require('../controllers/bookController');

router.get('/insert', controller.getBookList);

module.exports = router;