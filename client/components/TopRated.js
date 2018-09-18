import React, { Component } from 'react'
import { connect } from 'react-redux'
import store, { fetchProducts, fetchTopRated } from '../store'


class TopRated extends Component {
   
   componentDidMount(){
   	 const { fetchProducts, fetchTopRated } = this.props
   	 fetchProducts()
   	 fetchTopRated()
   }

  render() {
  	const { top } = this.props
  	return (
  	  <div>
  	  <h3>Top-Rated</h3>
  	  <hr />
  	    <li>{top.name} ({top.rating})</li>
  	  </div>
  	)
  }
}

const mapStateToProps = (state) => ({
  top: state.top
})

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchTopRated: () => dispatch(fetchTopRated())
})

export default connect(mapStateToProps, mapDispatchToProps)(TopRated)


