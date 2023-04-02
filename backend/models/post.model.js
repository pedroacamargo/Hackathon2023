module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("posts", {
    userId: {
      type: Sequelize.INTEGER
    },
    message: {
      type: Sequelize.STRING
    },
    filename: {
      type: Sequelize.STRING
    },
    commentIds: {
      type: Sequelize.INTEGER
    },
    token: {
      type: Sequelize.INTEGER
    }
    // date: {
    //   type: Sequelize.DATE
    // }
  });

  return Post;
};
