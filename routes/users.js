const { User, Office } = require('../db').models;
const router = require('express').Router();

module.exports = router;

// GET /users
router.get('/', (req, res, next) => {
  return User.findAll()
    .then(result => {
      console.log('result = ', result);
      res.send(result);
    })
    .catch(next);
});

// DELETE /users/:id
router.delete('/:id', (req, res, next) => {
  // console.log('DELETE /users/:id req.params.id = ', req.params.id);
  return User.destroy({ where: { id: req.params.id }})
    .then(result => {
      res.send('destroyed!');
    })
    .catch(next);
});

// PUT /users/:id
router.put('/:id', (req, res, next) => {
  // console.log('PUT /users/:id req.params.id = ', req.params.id);

});

// POST /users
router.post('/', (req, res, next) => {
  console.log('POST /users req.body = ', req.body);
  return User.create(req.body)
    .then(result => {
      res.send(result);
    })
    .catch(next);
});
