const Sequelize = require('sequelize')
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

//LOW-RATING
router.get('/low-rating', (req, res, next) => {
  const Op = Sequelize.Op
  Product.findAll({
  	where: {
  		rating: {
  			[Op.between]: [0, 8]
  		}
  	}
  })
  .then(products => {
  	console.log(products)
  	res.send(products)
  })
  .catch(next)
})

//MID-RATING
router.get('/mid-rating', (req, res, next) => {
  const Op = Sequelize.Op
  Product.findAll({
  	where: {
  		rating: {
  			[Op.between]: [9, 14]
  		}
  	}
  })
  .then(products => res.send(products))
  .catch(next)
})

//HIGH-RATING
router.get('/high-rating', (req, res, next) => {
  const Op = Sequelize.Op
  Product.findAll({
  	where: {
  		rating: {
  			[Op.between]: [15, 20]
  		}
  	}
  })
  .then(products => res.send(products))
  .catch(next)
})

//CREATE PRODUCT
router.post('/create', async (req, res, next) => {
  console.log(req.body.name)
  Product.create({
  	name: req.body.name,
  	rating: Math.round(Math.random()*20)
  })
  .then(newProduct => res.send(newProduct))
  .catch(next)
})

//DELETE PRODUCT
router.delete('/:id', (req, res, next) => {
  Product.destroy({
  	where: {
  		id: req.params.id
  	}
  })
  .then(() => res.sendStatus(204).end())
  .catch(next)
})