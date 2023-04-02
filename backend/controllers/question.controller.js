const db = require('../models');

const Question = db.question;

exports.getItem = async (req, res) => {
  Question.findOne({ where: { id: req.query.id } }).then((question) => {
    res.status(200).send(question);
  });
};

exports.list = async (req, res) => {
  Question.findAll().then((questions) => {
    res.status(200).send(questions);
  });
};

exports.new = async (req, res) => {
  // Save Post to Database
  try {
    const post = await Question.create({
      userId: req.userId,
      name: req.body.name,
      statement: req.body.question,
      posts: '[]',
    });
    res.status(200).redirect('/unirepos');
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
