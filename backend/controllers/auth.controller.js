const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = require('../models');
const config = require('../config/auth.config');

const User = db.user;

exports.signup = async (req, res) => {
  // Save User to Database
  try {
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      profile_filename: 'default_avatar.png',
      password: bcrypt.hashSync(req.body.password, 8),
    });

    const token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400, // 24 hours
    });

    // let authorities = [];
    // const roles = await user.getRoles();
    // for (let i = 0; i < roles.length; i++) {
    //   authorities.push("ROLE_" + roles[i].name.toUpperCase());
    // }

    req.session.token = token;

    return res.redirect('/');
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      return res.status(404).send({ message: 'User Not found.' });
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password,
    );

    if (!passwordIsValid) {
      return res.status(401).send({
        message: 'Invalid Password!',
      });
    }

    const token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400, // 24 hours
    });

    // let authorities = [];
    // const roles = await user.getRoles();
    // for (let i = 0; i < roles.length; i++) {
    //   authorities.push("ROLE_" + roles[i].name.toUpperCase());
    // }

    req.session.token = token;

    return res.redirect('/');
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.redirect('/');
  } catch (err) {
    return this.next(err);
  }
};
