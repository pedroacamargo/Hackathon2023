module.exports = (sequelize, Sequelize) => {
  const Question = sequelize.define('questions', {
    userId: {
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    statement: {
      type: Sequelize.STRING,
    },
    posts: {
      type: Sequelize.STRING,
    },
  });

  return Question;
};
