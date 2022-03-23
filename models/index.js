const Model = require("./Model");

//EXAMPLE ASSOCIATIONS
// Model1.hasMany(Model2, {
//   foreignKey: "",
// });

// Model2.belongsTo(Model1, {
//   foreignKey: "",
// });

const Event = require("./Event");
const User = require("./User-pass-val");


Event.belongsTo(User, {
  foreignKey: "event_id",
  onDelete: "SET NULL",
});


module.exports = {
  User,
 Event
};


