import React, { Component, Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import store, { fetchProducts, deleteAProduct, changeRating, filterByLowRatings, filterByMidRatings, filterByHighRatings } from '../store'


class ProductList extends Component {

  componentDidMount(){
  	const { fetchProducts, allRatings, changeRating } = this.props
  	allRatings === true &&
  	fetchProducts() 
  }

  render(){
  	const { products, deleteAProduct, filterByLowRatings, filterByMidRatings, filterByHighRatings } = this.props

  	return (
  	  <div>
  	  <h3>Products</h3>
  	  <hr />
  	  <ul>
  	  {products.map(product=> {
  	  	return (
  	  	  <Fragment key={product.id}>
	  	  	  <li>{product.name} ({product.rating})</li>
	  	  	  <button onClick={()=>deleteAProduct(product)}>delete</button>
  	  	  </Fragment>
  	  	)
  	  })}
  	  </ul>
  	  <div>
	  	  <Link to='/api/products/low-rating' onClick={()=>filterByLowRatings()}>Low-Rating</Link>
	  	  <Link to='/api/products/mid-rating' onClick={()=>filterByMidRatings()}>Mid-Rating</Link>
	  	  <Link to='/api/products/high-rating' onClick={()=>filterByHighRatings()}>High-Rating</Link>
	  </div>
  	  </div>
  	)
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
  allRatings: state.allRatings
})

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  deleteAProduct: (product) => dispatch(deleteAProduct(product)),
  changeRating: () => dispatch(changeRating()),
  filterByLowRatings: () => dispatch(filterByLowRatings()),
  filterByMidRatings: () => dispatch(filterByMidRatings()),
  filterByHighRatings: () => dispatch(filterByHighRatings())
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductList)