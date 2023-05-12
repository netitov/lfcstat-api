const router = require('express').Router();
const playerStats = require('../controllers/playerStats');

router.get('/player-stats', playerStats.getData);
router.patch('/player-stats', playerStats.updateData);

module.exports = router;
