module.exports = (User, Office) => {
  return User.bulkCreate([
    { name: 'Shrimply Pibbles' },
    { name: 'Scroopy Noopers' },
    { name: 'Flippy Nips' },
    { name: 'Noob Noob' },
  ])
    .then(users => {
      return Office.bulkCreate([
        { address: '1 Wall Street' },
        { address: '1 Bowling Green' },
        { address: '54 Pearl Street'},
      ]);
    })
};
