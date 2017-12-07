const studentRouter = require('express').Router()
studentRouter.get('/:id', (req, res)  => {
  const studentId = req.params.id
  res.send(studentId)
})

studentRouter.get('/', (req, res)  => {
  res.send('hi')
})

studentRouter.get('/:id', (req, res) => {
  res.send('hi' + req.params.id)
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
