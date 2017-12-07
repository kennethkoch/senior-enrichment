const campusRouter = require('express').Router()

campusRouter.get('/:id', (req, res)  => {
  const campusId = req.params.id
  res.send('hiii' + campusId)
})

campusRouter.get('/', (req, res)  => {
  res.send('hi')
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
