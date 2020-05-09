const express = require('express');

const requestValidator = require('../../common/middleware/requestValidator');
const { healthyCheck } = require('./controllers');

const router = express.Router();

router.get('/', healthyCheck);

module.exports = router;
