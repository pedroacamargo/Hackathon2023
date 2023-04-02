const { Sequelize } = require("../models");
const db = require("../models");
const Blog = db.blog;

exports.list = async (req, res) => {
  try {
    Blog.findAll().then(function (user) {
      res.send(user);
    });
  } catch (error) {
    return res.status(500).send({
      message: "Unable to find user!",
    });
  }
};

exports.new = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file was provided.' });
  }

  //   res.status(200).json({ message: 'File uploaded successfully.', filename: req.file.filename });

  // Save Post to Database
  try {
    const blog = await Blog.create({
      userId: req.userId,
      name: req.body.name,
      statementFilename: req.file.filename,
      posts: "[]"
    });

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};