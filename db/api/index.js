const router = require('express').Router()
const { Product } = require('../index')
module.exports = router

//FIND ALL
router.get('/', (req, res, next) => {
  Product.findAll()
  .then(products => res.send(products))
  .catch(next)
})

//FIND BY TOP RATING
router.get('/top-rating', async (req, res, next) => {
  const products = await Product.findAll()
  const ratings = products.map(product => {return product.rating})
  const topRating = Math.max(...ratings)
  Product.findOne({
  	where: {
  	  rating: topRating
  	}
  })
  .then(top => res.send(top))
  .catch(next)
})

//CREATE PRODUCT
router.post('/', (req, res, next) => {
  Product.create({
  	name: req.body.name,
  	rating: Math.round(Math.random()*20)
  })
  .then(newProduct => res.send(newProduct))
  .catch(next)
})

//DELETE PRODUCT
router.delete('/:id', (req, res, next) => {
  Product.findById(req.params.id)
  .then(() => res.sendStatus(204).end())
  .catch(next)
})