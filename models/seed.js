module.exports = (User, Office) => {
  return User.bulkCreate([
    { name: 'Shrimply Pibbles' },
    { name: 'Scroopy Noopers' },
    { name: 'Flippy Nips' },
    { name: 'Noob Noob' },
  ])
    .then(users => {
      return Office.bulkCreate([
        { address: 'Wall Street', lat: 1.0123, long: 2.0123 },
        { address: 'Bowling Green', lat: 10.0123, long: 20.0123 },
        { address: 'Pearl Street', lat: 100.0123, long: 200.0123 },
      ]);
    });
};
