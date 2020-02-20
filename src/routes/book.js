var express = require('express');
var router = express.Router();
var controller = require('../controllers/bookController');

router.post('/createBook', controller.createBook);
router.get('/queryBookList', controller.queryBookList);
router.get('/queryBookById', controller.queryBookById);
router.put('/updateBook', controller.updateBook);
router.delete('/removeBookById', controller.removeBookById);

module.exports = router;