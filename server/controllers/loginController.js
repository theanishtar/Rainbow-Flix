const UserModel = require('../models/userModel');
var jwtModel = require('../models/jwtModel');

class UserController {
	static async getUser(req, res) {
		try {
			const user = await UserModel.getUsers();
			if (!user) {
				return res.status(404).json({ error: 'User not found' });
			}
			res.json(user);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}
	static async login(req, res) {
		try {
			const user = await UserModel.login(req.body);
			if (user.length === 0) {
				return res.status(404).json({ error: 'User not found' });
			}
			let userRes = {
				email: user[0].email,
				roles: user[0].roles.split(',') // "ROLE_ADMIN,ROLE_USER" -> ["ROLE_ADMIN", "ROLE_USER"]
			}
			console.log(userRes);
			const accessToken = jwtModel.generateToken(userRes, '5h');
			const refreshToken = jwtModel.generateRefreshToken(userRes, '10h');
			let resp = {
				fullname: user[0].fullname,
				token: accessToken,
				refreshToken: refreshToken
			}
			res.json(resp);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}
}

module.exports = UserController;