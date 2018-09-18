import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import store, { createProduct, writeProduct } from '../store'

class ProductCreator extends Component {
  constructor(){
  	super()
  	this.handleSubmit = this.handleSubmit.bind(this)
  	this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
  	this.props.writeProduct(e.target.value)
  }

  async handleSubmit(e) {
  	e.preventDefault()
  	const { newProduct, createProduct } = this.props
  	createProduct(newProduct)	
  }

  render() {
  	const { handleChange, handleSubmit } = this
  	return (
  	  <div>
  	    <hr />
  	    <form onSubmit={handleSubmit}>
  	    <input type='text'
  	    	   value={this.props.newProduct}
  	    	   onChange={handleChange}
  	    	   placeholder='Submit Your Product'></input>
  	    <button>Create a Product</button>
  	    </form>
  	  </div>
  	)
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
  newProduct: state.newProduct
})

const mapDispatchToProps = (dispatch) => ({
  createProduct: (product) => dispatch(createProduct(product)),
  writeProduct: (content) => dispatch(writeProduct(content))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCreator)