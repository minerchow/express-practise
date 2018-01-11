var express = require('express');
var router = express.Router();

// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express' });
// });
var product = require('./index/product');
router.use('/index',product);  
module.exports = router;