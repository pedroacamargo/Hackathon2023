module.exports = (sequelize, Sequelize) => {
  const Blog = sequelize.define("blogs", {
    userId: {
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    statementFilename: {
      type: Sequelize.STRING
    },
    posts: {
      type: Sequelize.STRING
    }
  });

  return Blog;
};
