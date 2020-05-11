const express = require('express');

const requestValidator = require('../../common/middleware/requestValidator');
const { healthyCheck, notify } = require('./controllers');
const { notifySchema } = require('./joi/validationSchemas');

const router = express.Router();

router.get('/', healthyCheck);

router.post('/notify', requestValidator(notifySchema), notify);

module.exports = router;
