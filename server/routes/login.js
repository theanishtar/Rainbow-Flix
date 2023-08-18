var express = require('express');
var router = express.Router();
var loginCtrl = require('../controllers/loginController');

/* GET users listing. */
router.get('/', loginCtrl.getUser);
/* 
	RETURN: Token when login success
	{
		fullname: Tran Huu Dang
		token: eyhsujbjsv...nsje
		refreshToken: eyvkdnrks...jujee
	}
*/
router.post('/', (req, res) => {
	loginCtrl.login(req, res);
});


module.exports = router;
