'use strict';

const db = require('../index');
const Student = require('./students')
const Campus = require('./campus')

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
	// Exporting all models from here seems like a good idea!
// This is also probably a good place for you to set up your
Student.belongsTo(Campus)
Campus.hasMany(Student)


// run this only once! if run twice, force true on main.js to reset
// data to work with for right now, find a better way to seed the db later
// Campus.create({name:'luna', imageUrl:'null', description:'the moon'})
// Campus.create({name:'terra', imageUrl:'null', description:'the earth'})
// Campus.create({name:'mars', imageUrl:'null', description:'elon\'s vacation spot'})
// Campus.create({name:'titan', imageUrl:'null', description:'saturn\'s moon we might live on someday'})
// Student.create({firstName:'Sergey', lastName:'Brin', email:'gmailismine@gmail.com', gpa:3.1, campusId:1 })
// Student.create({firstName:'Jeff', lastName:'Bezos', email:'bezosprime@gmail.com', gpa:4.0, campusId:3 })
// Student.create({firstName:'Elon', lastName:'Musk', email:'mars2024@spacex.com', gpa:2.5, campusId:4 })
// Student.create({firstName:'Mark', lastName:'Zuckerberg', email:'zucks@facebook.com', gpa:1.4, campusId:2 })



module.exports = {
  db: db,
  Student: Student,
  Campus: Campus,
}
