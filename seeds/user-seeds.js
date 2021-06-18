const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'Legosi',
    email: 'legosi@animalmail.com',
    password: 'password123'
  },
  {
    username: 'Haru',
    email: 'haru@animalmail.com',
    password: 'password123'
  },
  {
    username: 'Jack',
    email: 'jack@animalmail.com',
    password: 'password123'
  },
  {
    username: 'Louis',
    email: 'louis@animalmail.com',
    password: 'password123'
  },
  {
    username: 'Bill',
    email: 'bill@animalmail.com',
    password: 'password123'
  },
  {
    username: 'Callo',
    email: 'callo@animalmail.com',
    password: 'password123'
  },
  {
    username: 'Sally',
    email: 'sally@animalmail.com',
    password: 'password123'
  },
  {
    username: 'Pina',
    email: 'pina@animalmail.com',
    password: 'password123'
  },
  {
    username: 'Aoba',
    email: 'aoba@animalmail.com',
    password: 'password123'
  },
  {
    username: 'Benny',
    email: 'benny@animalmail.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
