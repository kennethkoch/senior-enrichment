const campusRouter = require('express').Router()

const db = require('../db')
const Campus = require('../db/models').Campus


campusRouter.get('/:id', (req, res)  => {
  const campusId = req.params.id
  Campus.findById(campusId)
  .then(campus => res.json(campus))
})

campusRouter.get('/', (req, res)  => {
  Campus.findAll({where: req.query})
  .then(allCampuses => res.json(allCampuses))
})


campusRouter.post('/', (req, res, next) => {
  Campus.create(req.body)
  .then(campus => res.json(campus))
  .catch(next)
})

campusRouter.delete('/:id', (req,res,next) => {
  const campusId = req.params.id
  Campus.destroy({where:{id:campusId}})
  .then(() => res.status(204).end())
})

campusRouter.put('/:id', (req, res, next) => {
  Campus.update(req.body,{where:{id:req.params.id}})
  .then(result => {
    Campus.findById(req.params.id)
    .then(student => {
      res.send(student);
    })
  })
  .catch(next)
})

module.exports = campusRouter
