var express = require('express');
var router = express.Router();
var db = require('./../models/database');
var modelLogin = require('./../models/login');
var jwt = require('jsonwebtoken');
var dotent = require('dotenv');
dotent.config();

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

router.post('/token', (req, res) => {
	let data = req.body;
	console.log(data);
	console.log(process.env.ACCESS_TOKEN_SECRET)
	let sql = `SELECT * FROM account where email = '${data.email}' and password = '${data.pass}'`;
	db.query(sql, function (err, u) {
		if (err) {
			res.status(501).json('Server Error');
		} else {
			// res.status(200).json(u);
			if (u.length > 0) {
				console.log(u[0].fullname);
				const options = {
					expiresIn: 36000006767  // Thời gian sống của token, ví dụ: '1h', '30m', '2d', ...
				};
				try {
					let user = {
						email: u[0].email,
						role: u[0].role
					}
					const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30m' });
					//const accessToken = jwt.sign(u[0].email, process.env.ACCESS_TOKEN_SECRET);
					console.log(accessToken);
					let resp = {
						fullname: u[0].fullname,
						token: accessToken
					}
					res.status(200).json({ message: "Login Sucessfully", data: resp });
				} catch (error) {
					console.error('Error:', error.message);
					res.status(200).json({ message: "Login Sucessfully", data: null });
				}

			} else {
				res.status(401).json('Unauthorized');
			}
		}
	});
});

module.exports = router;
