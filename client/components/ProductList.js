import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'


export default class ProductList extends Component {
  
  render(){

  	return (
  	  <div>
  	    <h1>Products</h1>
  	    <hr />
  	    <ul>
  	      <li><Link to='/api/products'>Products</Link></li>
  	      <li><Link to='/api/products/top-rated'>Top Rated</Link></li>
  	    </ul>
  	  </div>
  	)
  }
}