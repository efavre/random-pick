var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  options = req.body
  selectedOptionIndex = Math.floor(Math.random() * options.length)
  res.contentType("text/plain");
  res.send(options[selectedOptionIndex]);
}); 

module.exports = router;
