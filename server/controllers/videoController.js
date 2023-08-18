const UserModel = require('../models/userModel');
const VideoModel = require('../models/videoModel');

class VideoController {
	static async getAll(req, res) {
		try {
			const videos = await VideoModel.getAll();
			console.log(videos)
			if (!videos) {
				return res.status(404).json({ error: 'List video is empty' });
			}
			console.log(videos)
			res.status(200).json(videos);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}

	static async getTop4Video(req, res) {
		try {
			const videos = await VideoModel.getTop4Video();
			if (!videos) {
				return res.status(404).json({ error: 'List video is empty' });
			}
			res.status(200).json(videos);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}

	static async getTrend(req, res) {
		try {
			const videos = await VideoModel.getTop4Video();
			if (!videos) {
				return res.status(404).json({ error: 'List video is empty' });
			}
			res.status(200).json(videos);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}

	static async findById(req, res) {
		try {
			let id = req.params.id;
			const videoDetails = await VideoModel.findById(id);
			const cleanedData = videoDetails.map(item => {
				const { id, title, href, poster, views, description, likes, shares, date, isActive } = item;
				return { id, title, href, poster, views, description, likes, shares, date, isActive };
			});
			//console.log(cleanedData)
			if (videoDetails.length === 0) {
				return res.status(404).json({ error: 'Video not found' });
			}
			res.status(200).json(cleanedData[0]);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}

	static async doLike(req, res) {
		try {
			let id = (req.params.id);
			const liked = await VideoModel.doLike(id);
			const video = await VideoModel.findById(id)
			if (!liked) {
				return res.status(404).json({ error: 'List video is empty' });
			}
			res.status(200).json(video);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}

	static async doWatch(req, res) {
		try {
			let id = (req.params.id);
			const watched = await VideoModel.doWatch(id);
			const video = await VideoModel.findById(id)
			if (!watched) {
				return res.status(404).json({ error: 'List video is empty' });
			}
			console.log(video)
			res.status(200).json(video[0]);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}
}


module.exports = VideoController;