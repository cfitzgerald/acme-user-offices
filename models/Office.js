const db = require('./db');
const Sequelize = db.Sequelize;

const Office = db.define('office', {
  address: {
    type: Sequelize.STRING, // for initial setup
  },
});

// exports
module.exports = Office;
