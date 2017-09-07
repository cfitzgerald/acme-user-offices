const db = require('./db');
const Sequelize = db.Sequelize;

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
  },
});

// exports
module.exports = User;
