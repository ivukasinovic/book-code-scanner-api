const express = require('express');
const userValidation = require('../../validations/user.validation');
const sessionController = require('../../controllers/session.controller');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');

const router = express.Router();

router.route('/').post(sessionController.createSession);

module.exports = router;
