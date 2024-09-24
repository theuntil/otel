var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index'); // 'index' şablonun adı, dosya yolu değil
});

module.exports = router;
