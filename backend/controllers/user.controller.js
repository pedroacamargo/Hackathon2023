const db = require('../models');

const User = db.user;

exports.allAccess = (req, res) => {
  res.status(200).send('Public Content.');
};

exports.sendProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.userId);
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send({
      message: 'Unable to find user!',
    });
  }
};

exports.userBoard = (req, res) => {
  res.status(200).send('User Content.');
};

exports.adminBoard = (req, res) => {
  res.status(200).send('Admin Content.');
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send('Moderator Content.');
};
