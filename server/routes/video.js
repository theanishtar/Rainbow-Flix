var express = require('express');
var router = express.Router();
var db = require('./../models/database');
var videoCtrl = require('./../controllers/videoController');

/* GET home page. */
router.get('/', videoCtrl.getAll);

// lấy 1 video bằng id
//router.get('/:id', videoCtrl.findById);

// xem video -> tăng views
router.get('/:id', videoCtrl.doWatch);

router.get('/top', videoCtrl.getTop4Video);

router.get('/trend', videoCtrl.getTrend);

// tăng số liked của user
// thêm vào yêu thích
//update số like của video
router.put('/like/:id', videoCtrl.doLike);


module.exports = router;