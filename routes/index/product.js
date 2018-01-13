var express = require('express');
var router = express.Router();

router.get('/product', function(req, res, next) {
    var array = [1,2,3,4];
    var array2 = [];
    res.render('index', { title: 'Express' });
});

router.get('/list',function(req,res,next){
    var list = {"list":[
        {
            'color':"red",
            'prize':'200'
        },
        {
            'color':"green",
            'prize':'200'
        }
    ]}
    return res.json(list)
})



module.exports = router;