var jwt = require('jsonwebtoken');
var dotent = require('dotenv');
dotent.config();

class JwtModel {
	static generateToken(data, time) {
		return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: time });
	}

	static generateRefreshToken(data, time) {
		return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: time });
	}
}

module.exports = JwtModel;