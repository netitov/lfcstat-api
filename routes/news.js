const router = require('express').Router();
const news = require('../controllers/news');

router.get('/news', news.getData);
router.post('/news', news.insertData);
router.patch('/news', news.updateData);

module.exports = router;
