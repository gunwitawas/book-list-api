var express = require('express');
var router = express.Router();
var controller = require('../controllers/bookController');

router.get('/', controller.getBookList);
module.exports = router;