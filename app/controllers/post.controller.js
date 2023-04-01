const db = require("../models");
const Post = db.post;
const multer = require('multer');

// An array to store the uploaded files
const uploadedFiles = [];

exports.newpost = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file was provided.' });
  }

  // Add the uploaded file to the array
  uploadedFiles.push({
    filename: req.file.filename,
    originalname: req.file.originalname,
  });

//   res.status(200).json({ message: 'File uploaded successfully.', filename: req.file.filename });

  // Save Post to Database
  try {
    const post = await Post.create({
      userId: req.userId,
      message: req.body.message,
      filename: req.file.filename
    });

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};