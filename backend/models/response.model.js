module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define('posts', {
    userId: {
      type: Sequelize.INTEGER,
    },
    message: {
      type: Sequelize.STRING,
    },
    token: {
      type: Sequelize.INTEGER,
    },
    // date: {
    //   type: Sequelize.DATE
    // }
  });

  return Post;
};
