const sequelize = require("../config/connection");
//EXAMPLE MODEL REQUIRE
// const Dish = require('../models/Dish');
//EXAMPLE SEEDS JSON REQUIRE
// const dishData = require('./dish-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  //EXAMPLE USING "Dish" and "dishData"
  //   await Dish.bulkCreate(dishData, {
  //     individualHooks: true,
  //     returning: true,
  //   });

  process.exit(0);
};

seedDatabase();
