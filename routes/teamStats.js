const router = require('express').Router();
const teamStats = require('../controllers/teamStats');

router.get('/team-stats', teamStats.getData);
router.patch('/team-stats', teamStats.updateData);

module.exports = router;
