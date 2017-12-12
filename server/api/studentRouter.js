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

studentRouter.delete('/:id', (req, res, next) => {
  Student.destroy({where:{id:req.params.id}})
  .then(() => res.status(204).end())
  .catch(next)
})
studentRouter.put('/:id', (req, res, next) => {
  Student.update(req.body,{where:{id:req.params.id}})
  .then(result => {
    Student.findById(req.params.id)
    .then(student => {
      res.send(student);
    })
  })
  .catch(next)
})

module.exports = studentRouter
