var db = require('./database');

class VideoModel {
	static findAll() {
		let sql = `SELECT * FROM video where isActive = 1;`;
		db.query(sql, function (err, data) {
			if (err)
				return (err);
			const cleanedData = data.map(item => {
				const { id, title, href, poster, views, description, likes, shares, date, isActive } = item;
				return { id, title, href, poster, views, description, likes, shares, date, isActive };
			});
			console.log(cleanedData)
			return (cleanedData);
		});
	}
	static getAll() {
		return new Promise((resolve, reject) => {
			let sql = `SELECT * FROM video  where isActive = 1;`;
			db.query(sql, function (err, data) {
				if (err)
					reject(err);
				// const cleanedData = data.map(item => {
				// 	const { id, title, href, poster, views, description, likes, shares, date, isActive } = item;
				// 	return { id, title, href, poster, views, description, likes, shares, date, isActive };
				// });
				console.log(data)
				resolve(data);
			});
		});
	}

	static getTop4Video() {
		return new Promise((resolve, reject) => {
			let sql = `SELECT * FROM video ORDER BY views DESC LIMIT 4;`;
			db.query(sql, function (err, data) {
				if (err)
					reject(err);
				resolve(data);
			});
		});
	}

	static findById(id) {
		return new Promise((resolve, reject) => {
			let sql = `SELECT * FROM video where isActive = 1 and ${id}`;
			db.query(sql, function (err, data) {
				if (err)
					reject(err);
				resolve(data);
			});
		});
	}

	static getTrend() {
		return new Promise((resolve, reject) => {
			let sql = `SELECT * FROM video ORDER BY views DESC`;
			db.query(sql, function (err, data) {
				if (err)
					reject(err);
				resolve(data);
			});
		});
	}

	static doLike(id) {
		return new Promise((resolve, reject) => {
			let sql = `UPDATE video SET likes = likes + 1 WHERE ${id}`;
			db.query(sql, function (err, data) {
				if (err)
					reject(err);
				console.log(data)
				resolve(data);
			});
		});
	}

	static doWatch(id) {
		return new Promise((resolve, reject) => {
			let sql = `UPDATE video SET views = views + 1 WHERE ${id}`;
			db.query(sql, function (err, data) {
				if (err)
					reject(err);
				console.log(data)
				resolve(data);
			});
		});
	}
}

module.exports = VideoModel;