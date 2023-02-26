const router = require('express').Router();
const events = require('../controllers/events');

router.get('/events', events.getData);
router.post('/events', events.insertData);
router.patch('/events', events.updateData);

module.exports = router;
