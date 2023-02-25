const router = require('express').Router();
const standing = require('../controllers/standings');

router.get('/standings', standing.getStandings);
router.post('/standings', standing.insertStandings);
router.patch('/standings', standing.updateStandings);

module.exports = router;
