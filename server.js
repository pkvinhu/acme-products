const express = require('express');
const app = express();
const { db, Product } = require('./db')
const router = require('./db/api')
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use('/api/products', router)

db.sync()
// .then (() => {
// 	Promise.all([
// 	  Product.create({ name: "Luigi's Tomatos", rating: 2 }),
// 	  Product.create({ name: "Nimbus 2000", rating: 10 }),
// 	  Product.create({ name: "Biggie Smalls", rating: 5})
// 	])
// })
.then(() => {
  app.listen(3000, () => {
  	console.log('Listening to port 3000!')
  })
})
