const sequelize = require('../config/connection');
const seedData = require('./data');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedData();

  process.exit(0);
};

seedAll();
