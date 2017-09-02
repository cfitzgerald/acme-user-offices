const db = require('./db');
const Sequelize = db.Sequelize;

const Office = db.define('office', {
  address: {
    type: Sequelize.STRING,
  },
  lat: {
    type: Sequelize.FLOAT,
  },
  long: {
    type: Sequelize.FLOAT,
  },
});

// exports
module.exports = Office;
