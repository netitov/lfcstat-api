const router = require('express').Router();
const videos = require('../controllers/videos');

router.get('/videos', videos.getData);
router.patch('/videos', videos.updateData);

module.exports = router;
