var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/evaluateExpression', function(req, res, next) {
    var operand1 = req.body.operand1;
    var operand2 = req.body.operand2;
    var operator = req.body.operator;


    // Check the password
    if(theUser.length === 1){
        theUser[0].password === reqPassword &&
        res.status(201).json({message: "Login successful"}) ||
        res.status(401).json({message: "Login failed"});
    } else {
        res.status(401).json({message: "Login failed"});
    }
});

router.post('/add', function(req, res, next){
	var result = parseInt(req.body.operand1) + parseInt(req.body.operand2);
	res.status(201).json({result : result.toString()});
});


module.exports = router;
