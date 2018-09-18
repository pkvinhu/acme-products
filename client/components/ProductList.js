import React, { Component, Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import store, { fetchProducts, deleteAProduct } from '../store'


class ProductList extends Component {

  componentDidMount(){
  	this.props.fetchProducts()
  }

  render(){
  	const { products, deleteAProduct } = this.props
  	return (
  	  <div>
  	  <h3>Products</h3>
  	  <hr />
  	  <ul>
  	  {products.map(product=> {
  	  	return (
  	  	  <Fragment>
	  	  	  <li key={product.id}>{product.name} ({product.rating})</li>
	  	  	  <button onClick={()=>deleteAProduct(product)}>delete</button>
  	  	  </Fragment>
  	  	)
  	  })}
  	  </ul>
  	  </div>
  	)
  }
}

const mapStateToProps = (state) => ({
  products: state.products
})

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  deleteAProduct: (product) => dispatch(deleteAProduct(product))
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductList)