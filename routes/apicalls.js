const router = require('express').Router();
const apicall = require('../controllers/apicalls');

router.get('/apicalls', apicall.getApiCalls);
router.post('/apicalls', apicall.insertApiCall);

module.exports = router;
