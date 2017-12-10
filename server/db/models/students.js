const db = require('../index.js')
const Sequelize = require('sequelize')

const Student = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
    isEmail: true,
  },
  gpa: {
    type: Sequelize.FLOAT,
    min: 0.0,
    max: 4.0,
  },
  name: {
    type: Sequelize.VIRTUAL,
    get () {
      return (this.firstName) + ' ' + (this.lastName)
    }
  }
})

module.exports = Student
