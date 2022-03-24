const { User } = require('../models');

const userData = [
  {
    first_name: 'Daryl',
    last_name: 'Peterson',
    username: 'dpete34',
    email: 'darylpeterson@gmail.com',
    password: 'dar34pet'
  },
  {
    first_name: 'Marc',
    last_name: 'Anthony',
    username: 'mtony100',
    email: 'marcanthony@gmail.com',
    password: 'mar100ant'
  },
  {
    first_name: 'Jimmy',
    last_name: 'Rollins',
    username: 'jroll11',
    email: 'jimmyrollins@gmail.com',
    password: 'jrollgg*4'
  },
  {
    first_name: 'Calvin',
    last_name: 'Hobbes',
    username: 'cHobbx55',
    email: 'calHobbes@gmail.com',
    password: 'hobby$512'
  },

];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;