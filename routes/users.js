const { User, Office } = require('../models').models;
const router = require('express').Router();

module.exports = router;

// GET /users
router.get('/', (req, res, next) => {

});

// DELETE /users/:id
router.delete('/:id', (req, res, next) => {

});

// PUT /users/:id
router.put('/:id', (req, res, next) => {

});

// POST /users
router.post('/', (req, res, next) => {
  // console.log('POST /users req.body = ', req.body);
  // return User.create(req.body)
  //   .then(redirect(res))
  //   .catch(next);
});
