const db = require("../models");
const Question = db.question;
const multer = require('multer');

exports.getItem = async (req, res) => {
  Question.findOne({ where: { id: req.query.id } }).then(question => {
    res.status(200).send(question);
  });
}

exports.list = async (req, res) => {
  Question.findAll().then(questions => {
    res.status(200).send(questions);
  });
}

exports.new = async (req, res) => {
  // if (!req.file) {
  //   return res.status(400).json({ message: 'No file was provided.' });
  // }

  //   res.status(200).json({ message: 'File uploaded successfully.', filename: req.file.filename });

  // Save Post to Database
  try {
    const post = await Question.create({
      userId: req.userId,
      name: req.body.name,
      statement: req.body.question,
      posts: "[]"
    });
    res.status(200).redirect("/unirepos");

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};