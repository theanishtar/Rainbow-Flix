var jwtModel = require('./jwtModel');
var db = require('./database');


var queryLogin = ((email, password) =>
	`SELECT u.fullname, u.email, GROUP_CONCAT(r.name) AS roles
	FROM roles r
	INNER JOIN userrole ur ON r.id = ur.roleid
	INNER JOIN account u ON ur.username like u.username
	WHERE u.email like '${email}' and u.password like '${password}' 
	GROUP BY u.email;`
)


class UserModel {
	static getUsers() {
		return new Promise((resolve, reject) => {
			let sql = `SELECT * FROM account`;
			db.query(sql, function (err, data) {
				if (err)
					reject(err);
				resolve(data);
			});
		});
	}

	static login(user) {
		console.log("getdatabase: " + { user });
		return new Promise((resolve, reject) => {
			let sql = queryLogin(user.email, user.password);
			console.log(user);
			db.query(sql, function (err, data) {
				if (err) {
					reject(err);
				}
				resolve(data);
			});
		});
	}
}

module.exports = UserModel;