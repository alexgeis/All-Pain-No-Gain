// const Model = require("./Model");

//EXAMPLE ASSOCIATIONS
// Model1.hasMany(Model2, {
//   foreignKey: "",
// });

// Model2.belongsTo(Model1, {
//   foreignKey: "",
// });

const Event = require("./Event");
const User = require("./User");

Event.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Event, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

module.exports = {
  User,
  Event,
};
