var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  let options = req.body
  if (Array.isArray(options) && options.length > 0) {
	let selectedOptionIndex = Math.floor(Math.random() * options.length)
	res.contentType("application/json");
	res.send({option: options[selectedOptionIndex]});  	
  } else {
  	res.status(400);
	res.send({error: "not an array or array empty"});
  }
}); 

module.exports = router;
