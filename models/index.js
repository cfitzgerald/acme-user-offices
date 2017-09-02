const db = require('./db');

// models
const User = require('./User');
const Office = require('./Office');

// associations
User.belongsTo(Office);
Office.hasMany(User);

// sync
const sync = () => {
  return db.sync({ force: true });
};

// seed
const seed = () => {
  return require('./seed')(User, Office);
};

// exports
module.exports = {
  models: { User, Office },
  sync,
  seed,
};
