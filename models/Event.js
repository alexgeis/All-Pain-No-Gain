const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Event extends Model {}

Event.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        workout_name: {
            type: DataTypes.STRING,
        },
        meals_name: {
            type: DataTypes.STRING,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {model: 'User', key: "id"}
          }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Month',
      }
)

module.exports = Event;