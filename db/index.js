const Sequelize = require('sequelize')
const db = new Sequelize(process.env.DATABASE_URL, { logging: false })

const Product = db.define('product', {
  name: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  rating: Sequelize.INTEGER
})


module.exports = {
  db,
  Product
}