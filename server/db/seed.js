const { Student, Campus } = require('./associations.js');
const db = require('./db.js');
const faker = require('faker');

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });
  } catch (ex) {
    console.log(ex);
  }
};

module.exports = syncAndSeed;
