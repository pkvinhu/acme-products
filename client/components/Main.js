import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import ProductList from './ProductList'
import TopRated from './TopRated'
import ProductCreator from './ProductCreator'
import store, { fetchProducts, fetchTopRated } from '../store'
import { connect } from 'react-redux'

class Main extends Component {
  
  componentDidMount(){
    const { fetchProducts, fetchTopRated } = this.props
    fetchProducts()
    fetchTopRated()
  }

  render(){
    const { products, top } = this.props
    console.log(products)
  	return (
  	  <div>
  	    <h1>Products</h1>
  	    <hr />
  	    <ul>
  	      <li><Link to='/api/products'>Products({products.length})</Link></li>
  	      <li><Link to='/api/products/top-rated'>Top Rated({top.name})</Link></li>
  	    </ul>
        <ProductCreator />
  	    <Route path='/api/products' render={()=><ProductList />}/>
        <Route path='/api/products/top-rated' render={()=><TopRated />}/>
  	  </div>
  	)
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
  top: state.top
})

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchTopRated: () => dispatch(fetchTopRated())
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)