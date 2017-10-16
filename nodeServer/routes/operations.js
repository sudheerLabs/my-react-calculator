var express = require('express');
var router = express.Router();


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

router.post('/doAddition', function(req, res, next){
	var result = parseInt(req.body.operand1) + parseInt(req.body.operand2);
	res.status(201).json({result : result.toString()});
});

router.post('/doSubtraction', function(req, res, next){
    console.log(parseInt(req.body.operand2));
    var result = parseInt(req.body.operand1) - parseInt(req.body.operand2);
    console.log(result.toString());
    res.status(201).json({result : result.toString()});
});

router.post('/doMultiplication', function(req, res, next){
    var result = parseInt(req.body.operand1) * parseInt(req.body.operand2);
    res.status(201).json({result : result.toString()});
});

router.post('/doDivision', function(req, res, next){
    var result = parseInt(req.body.operand1) / parseInt(req.body.operand2);
    res.status(201).json({result : result.toString()});
});

module.exports = router;