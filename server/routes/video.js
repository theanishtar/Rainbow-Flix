var express = require('express');
var router = express.Router();
var db = require('./../models/database');

/* GET home page. */
router.get('/', function (req, res, next) {
	let sql = `SELECT * FROM video where isActive = 1`;
	db.query(sql, function (err, data) {
		res.status(200).json(data);
	});
});
router.get('/:id', function (req, res, next) {
	let id = req.params.id;
	//console.log(id);
	let sql = `SELECT * FROM video where isActive = 1 and ${id}`;
	db.query(sql, id, (err, v) => {
		//console.log(sql);
		//res.json(d[0]);
		if (err) {
			res.status(501).json('Server Error');
		} else {
			// res.status(200).json(u);
			if (v.length > 0) {
				res.status(200).json({ message: "Sucessfully", data: v[0] });
			} else {
				res.status(401).json('Unauthorized');
			}
		}
	});
});
router.get('/top', function (req, res, next) {
	let sql = `SELECT * FROM video ORDER BY views DESC LIMIT 4;`;
	db.query(sql, function (err, data) {
		res.status(200).json(data);
	});
});

router.get('/trend', function (req, res, next) {
	let sql = `SELECT * FROM video ORDER BY views DESC`;
	db.query(sql, function (err, data) {
		res.status(200).json(data);
	});
});

router.put('/like/:id', function (req, res, next) {
	let id = req.params.id;
	let sql = `SELECT * FROM video ORDER BY views DESC`;
	db.query(sql, function (err, data) {
		res.status(200).json(data);
	});
});

module.exports = router;