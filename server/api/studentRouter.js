const studentRouter = require('express').Router()
const db = require('../db')
const Student = require('../db/models').Student
const Campus = require('../db/models').Campus

studentRouter.get('/:id', (req, res, next) => {
  const studentId = req.params.id;
  Student.findById(studentId)
  .then(student => res.json(student))
  .catch(next)
})

studentRouter.get('/', (req, res, next)  => {
  Student.findAll()
  .then(allStudents => res.json(allStudents))
  .catch(next)
})

studentRouter.post('/', (req, res, next) => {
  Student.create(req.body)
  .then(student => res.json(student))
  .catch(next)
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
