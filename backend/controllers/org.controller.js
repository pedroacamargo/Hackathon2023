const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.search = async (req, res) => {
  // Save User to Database
  console.log(req.val)
  // try {
  //   const user = await User.create({
  //     username: req.body.username,
  //     email: req.body.email,
  //     password: bcrypt.hashSync(req.body.password, 8),
  //   });


  //   res.send({ message: "User registered successfully!" });
  // } catch (error) {
  //   res.status(500).send({ message: error.message });
  // }
};
