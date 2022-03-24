const { Event } = require('../models');

const eventData = [
  {
    date: '2022-02-24',
    workout_name: 'Strength',
    meals_name: 'Breakfast',
  },
  {
    date: '2022-03-13',
    workout_name: 'Swimming',
    meals_name: 'Lunch',
  },
  {
    date: '2022-01-16',
    workout_name: 'Aerobic',
    meals_name: 'Dinner',
  },
  {
    date: '2022-03-06',
    workout_name: 'Cardio',
    meals_name: 'Snacks',
  },
];

const seedEvent = () => Event.bulkCreate(eventData);

module.exports = seedEvent;