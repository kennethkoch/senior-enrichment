const studentRouter = require('express').Router()
const db = require('../db')
const Student = require('../db/models').Student
const Campus = require('../db/models').Campus

studentRouter.get('/:id', (req, res) => {
  const studentId = req.params.id;
  Student.findById(studentId)
  .then(student => res.json(student))
})

studentRouter.get('/', (req, res)  => {
  Student.findAll()
  .then(allStudents => res.json(allStudents))
})


/**
studentRouter.post()
post a new student to db

studentRouter.put()
update student info for one student

studentRouter.delete()
delete student
*/

module.exports = studentRouter
