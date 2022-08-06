const { DATA } = require('../models');

const data = [
  {
    name: '',
    starting_date: '',
    ending_date: '',
  }
];

const seedData = () => DATA.bulkCreate(data);

module.exports = seedData;
