var express = require('express');
var router = express.Router();
var db = require('./../models/database');
var modelLogin = require('./../models/login');
var jwt = require('jsonwebtoken');
var dotent = require('dotenv');
dotent.config();

var queryLogin = ((email, password) =>
	`SELECT u.fullname, u.email, GROUP_CONCAT(r.name) AS roles
	FROM roles r
	INNER JOIN userrole ur ON r.id = ur.roleid
	INNER JOIN account u ON ur.username like u.username
	WHERE u.email like '${email}' and u.password like '${password}' 
	GROUP BY u.email;`
)

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

// Login successfuly will return token
router.post('/token', (req, res) => {
	let data = req.body;
	let sql = queryLogin(data.email, data.password);
	db.query(sql, function (err, u) {
		if (err) {
			res.status(501).json('Server Error');
		} else {
			// res.status(200).json(u);
			if (u.length > 0) {
				try {
					let user = {
						email: u[0].email,
						roles: u[0].roles
					}
					const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5h' });
					const refreshToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10h' });
					let resp = {
						fullname: u[0].fullname,
						token: accessToken,
						refreshToken: refreshToken
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
