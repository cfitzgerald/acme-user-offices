const app = require('./app');
const port = process.env.PORT || 3000;

// db
const models = require('./db');

// sync, seed, and listen
models.sync()
  .then( () => {
    return models.seed();
  })
  .then(seed => {
    app.listen(port, () => {
      console.log(`acme-user-offices listening on ${ port }...`);
    });
  })
  .catch(console.error);
