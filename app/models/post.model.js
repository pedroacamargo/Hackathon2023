module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("posts", {
    userId: {
      type: Sequelize.INTEGER
    },
    message: {
      type: Sequelize.STRING
    }
    // date: {
    //   type: Sequelize.DATE
    // }
  });

  return Post;
};
