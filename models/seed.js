module.exports = (User, Office) => {
  return User.bulkCreate([
    { name: 'Shrimply Pibbles' },
    { name: 'Scroopy Noopers' },
    { name: 'Flippy Nips' },
    { name: 'Noob Noob' },
  ])
    .then(users => {
      return Office.bulkCreate([
        { address: 'Wall Street' },
        { address: 'Bowling Green' },
        { address: 'Pearl Street' },
      ]);
    })
};
