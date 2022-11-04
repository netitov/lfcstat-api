const router = require('express').Router();
const standing = require('../controllers/standings');

router.get('/', standing.getStandings);
router.post('/', standing.insertStandings);
router.patch('/', standing.updateStandings);

module.exports = router;
