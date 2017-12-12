const db = require('../index.js')
const Sequelize = require('sequelize')

const Campus = db.define('campuses', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Campus
