var express = require('express');
var router = express.Router();
var db = require('./../models/database');
var videoCtrl = require('./../controllers/videoController');

/* GET home page. */
router.get('/', videoCtrl.getAll);

router.get('/top', videoCtrl.getTop4Video);

router.get('/trend', videoCtrl.getTrend);

router.get('/view-?id', function (req, res, next) {
	res.redirect('/view/id');
});

module.exports = router;
