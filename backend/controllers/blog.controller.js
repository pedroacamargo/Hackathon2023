const db = require("../models");
const Blog = db.blog;
const multer = require('multer');

exports.list = async (req, res) => {
  Blog.findAll().then(blogs => {
    res.status(200).send(blogs);
  });
}

exports.newpost = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file was provided.' });
  }

//   res.status(200).json({ message: 'File uploaded successfully.', filename: req.file.filename });

  console.log(req.body.message);
  // Save Post to Database
  try {
    const post = await Blog.create({
      userId: req.userId,
      name: req.body.name,
      statement: req.body.message,
      filename: req.file.filename,
      posts: "[]"
    });

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};