module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("comments", {
    userId: {
      type: Sequelize.INTEGER
    },
    comment: {
      type: Sequelize.STRING
    },
    replyIds: {
      type: Sequelize.ARRAY(Sequelize.INTEGER)
    },
    commentIds: {
      type: Sequelize.ARRAY(Sequelize.INTEGER)
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
