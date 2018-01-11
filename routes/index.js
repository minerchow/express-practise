var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// var product = require('./index/product');

// router.use('/',product);
module.exports = router;
