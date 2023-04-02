module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("comments", {
    userId: {
      type: Sequelize.INTEGER
    },
    comment: {
      type: Sequelize.STRING
    },
    replyIds: {
      type: Sequelize.STRING
    },
    commentIds: {
      type: Sequelize.STRING
    },
    commentTime: {
      type: Sequelize.INTEGER
    }
    // date: {
    //   type: Sequelize.DATE
    // }
  });

  return Post;
};
