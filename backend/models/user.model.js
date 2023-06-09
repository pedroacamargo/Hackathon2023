module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('users', {
    username: {
      type: Sequelize.STRING,
    },
    profile_filename: {
      type: Sequelize.STRING,
    },
    fullname: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  });

  return User;
};
