var express = require('express');
var router = express.Router();
var db = require('./../models/database');
var modelLogin = require('./../models/login');

/* GET users listing. */
router.get('/', function (req, res, next) {
	let sql = `SELECT * FROM account`;
	db.query(sql, function (err, data) {
		res.status(200).json(data);
	});
});

router.post('/', (req, res) => {
	let data = req.body;
	console.log(data)
	let sql = `SELECT * FROM account where email = '${data.email}' and password = '${data.pass}'`;
	db.query(sql, function (err, u) {
		if (err) {
			res.status(501).json('Server Error');
		} else {
			// res.status(200).json(u);
			if (u.length > 0) {
				res.status(200).json({ message: "Login Sucessfully", data: u });
			} else {
				res.status(401).json('Unauthorized');
			}
		}

	});
});

module.exports = router;
