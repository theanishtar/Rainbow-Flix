var db = require('./database');
exports.login = function (id, callback) {
	let sql = 'SELECT * FROM account WHERE username = ?'
	db.query(sql, id, (err, d) => {
		data = d[0];
		callback(data);
	});
} 