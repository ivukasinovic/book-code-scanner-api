const httpStatus = require('http-status');
const Session = require('../models/session.model');
const catchAsync = require('../utils/catchAsync');

const createSession = catchAsync(async (req, res) => {
  const user = await Session.create(req.body);
  res.status(httpStatus.CREATED).send(user);
});

module.exports = {
  createSession,
};
