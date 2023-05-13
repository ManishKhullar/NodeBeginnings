var express = require('express');
var router = express.Router();

var clientController = require('../Controller/Users');
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/Manish', clientController.DataParser)

router.post('/AddData', clientController.adding)

router.get('/getDataById', clientController.letsGetDataById)

router.post('/updateIt', clientController.update)

module.exports = router;