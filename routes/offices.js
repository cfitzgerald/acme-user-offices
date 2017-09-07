const { User, Office } = require('../db').models;
const router = require('express').Router();

module.exports = router;

// GET /offices
router.get('/', (req, res, next) => {
  return Office.findAll({
    include: [ User ],
    order: ['name']
  })
    .then(offices => {
      res.send(offices);
    })
    .catch(next);
});

// DELETE /offices/:id
router.delete('/:id', (req, res, next) => {
  console.log('DELETE /offices/:id req.params.id = ', req.params.id);
  return Office.destroy({ where: { id: req.params.id }})
    .then(result => {
      res.send('destroyed!');
    })
    .catch(next);
});

// POST /offices
router.post('/', (req, res, next) => {
  // console.log('POST /offices req.body = ', req.body);
  return Office.create(req.body)
    .then(office => {
      res.send(office);
    })
    .catch(next);
});
