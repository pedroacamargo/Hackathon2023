const db = require("../models");
const Post = db.post;
const multer = require('multer');

exports.new = async (req, res) => {
  // if (!req.file) {
  //   return res.status(400).json({ message: 'No file was provided.' });
  // }

//   res.status(200).json({ message: 'File uploaded successfully.', filename: req.file.filename });

  // Save Post to Database
  console.log(JSON.stringify(req.body,null,2))
  try {
    const post = await Post.create({
      userId: req.userId,
      message: req.body.question,
      filename: req.file.filename
    });

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};