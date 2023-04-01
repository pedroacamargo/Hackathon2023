module.exports = (sequelize, Sequelize) => {
  const Course = sequelize.define("courses", {
    name: {
      type: Sequelize.STRING
    },
    orgId: {
      type: Sequelize.INTEGER
    },
    countryId: {
      type: Sequelize.INTEGER
    },
  });

  return User;
};
