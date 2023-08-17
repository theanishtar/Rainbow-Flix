var express = require('express');
var router = express.Router();
var db = require('./../models/database');
var modelmodelRoles = require('./../models/roles');

/*
		SELECT r.name
		FROM account u
		JOIN userrole ur ON u.username = ur.username
		JOIN roles r ON ur.id = r.id
		WHERE u.username like 'dangth';

		LOGIN

		SELECT u.email, u.fullname, r.name as roles
		FROM account u
		JOIN userrole ur ON u.username = ur.username
		JOIN roles r ON ur.id = r.id
		WHERE u.email like 'dangtt135@gmail.com' and u.password like '9999';


		SELECT u.fullname, u.email, GROUP_CONCAT(r.name) AS roles
		FROM roles r
		INNER JOIN userrole ur ON r.id = ur.roleid
		INNER JOIN account u ON ur.username like u.username
		WHERE u.email like 'nganntd@gmail.com' and u.password like 'ngan' 
		GROUP BY u.email;
*/

var query = ((email, password) => `SELECT u.email, u.fullname, r.name as roles
											FROM account u
											JOIN userrole ur ON u.username = ur.username
											JOIN roles r ON ur.id = r.id
											WHERE u.email like '${email}' and u.password like '${password}';`
)

var qur = ((username) =>
	`SELECT r.name FROM account u JOIN userrole ur ON u.username = ur.username JOIN roles r ON ur.id = r.id WHERE u.username like '${username}';`
)

/* GET home page. */
router.get('/', function (req, res, next) {
	let sql = `SELECT * FROM video where isActive = 1`;
	db.query(sql, function (err, data) {
		res.status(200).json(data);
	});
});

router.get('/:id', function (req, res, next) {
	let id = req.params.id;
	console.log(id);
	let sql = qur(id);
	db.query(sql, id, (err, v) => {
		if (err) {
			res.status(501).json('Server Error');
		} else {
			// res.status(200).json(u);
			if (v.length > 0) {
				let data = {
					roles: v[0].name
				}
				res.status(200).json({ message: "Sucessfully", data: data });
			} else {
				res.status(401).json('Unauthorized');
			}
		}
	});
});

module.exports = router;
