const db = require('../models');

const Post = db.post;

exports.new = async (req, res) => {
  // Save Post to Database
  try {
    const post = await Post.create({
      userId: req.userId,
      message: req.body.question,
      filename: req.file.filename,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
