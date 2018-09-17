import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import ProductList from './ProductList'

export default class Main extends Component {
  
  render(){

  	return (
  	  <div>
  	    <h1>Products</h1>
  	    <hr />
  	    <ul>
  	      <li><Link to='/api/products'>Products</Link></li>
  	      <li><Link to='/api/products/top-rated'>Top Rated</Link></li>
  	    </ul>
  	    <Route exact path='/' component={ProductList}/>
        <Route path='/top-rated' component={TopRated}/>
  	  </div>
  	)
  }
}