const campusRouter = require('express').Router()

const db = require('../db')
const Campus = require('../db/models').Campus


campusRouter.get('/:id', (req, res)  => {
  const campusId = req.params.id
  res.send('campuses here')
})

campusRouter.get('/', (req, res)  => {
  Campus.findAll({where: req.query})
  .then(allCampuses => res.json(allCampuses))
})


/**
campusRouter.post()
post a new campus to db

campusRouter.put()
update campus info for one campus

campusRouter.delete()
delete campus
*/

module.exports = campusRouter
