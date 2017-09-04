module.exports = (User, Office) => {
  return Office.bulkCreate([
    { address: 'Beaver Street', lat: 1.0123, lng: 2.0123 },
    { address: 'Broad Street', lat: 10.0123, lng: 20.0123 },
    { address: 'Stone Street', lat: 100.0123, lng: 200.0123 },
  ])
    .then(offices => {
      return User.bulkCreate([
        { name: 'Shrimply Pibbles', officeId: 2 },
        { name: 'Scroopy Noopers', officeId: 1 },
        { name: 'Flippy Nips', officeId: 2 },
        { name: 'Noob Noob' },
      ]);
    });
};
