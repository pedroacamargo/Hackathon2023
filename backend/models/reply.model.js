module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("replys", {
    userId: {
      type: Sequelize.INTEGER
    },
    reply: {
      type: Sequelize.STRING
    },
    replyIds: {
      type: Sequelize.ARRAY(Sequelize.INTEGER)
    },
    replyTime: {
      type: Sequelize.INTEGER
    }
    // date: {
    //   type: Sequelize.DATE
    // }
  });

  return Post;
};
