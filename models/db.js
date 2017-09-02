const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL, {
  logging: false
});

// exports
module.exports = db;
