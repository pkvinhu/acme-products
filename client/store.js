import { createStore, applyMiddleware } from 'redux'
import loggingMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'


//INITIAL STATE
const initialState = {
  products: [],
  top: {},
  newProduct: ''
}


//ACTION TYPES
const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_TOP_RATED ='GET_TOP_RATED'
const WRITE_PRODUCT = 'WRITE_PRODUCT'
const CREATE_PRODUCT = 'CREATE_PRODUCT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'

//ACTION CREATORS
export const getProducts = (products) => ({
  type: GET_PRODUCTS,
  products
})

export const getTopRated = (product) => ({
  type: GET_TOP_RATED,
  product
})

export const writeProduct = (content) => ({
  type: WRITE_PRODUCT,
  content
})

export const createAProduct = (product) => ({
  type: CREATE_PRODUCT,
  product
})

export const deleteProduct = (product) => ({
  type: DELETE_PRODUCT,
  product
})


//THUNK CREATORS
export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await axios.get('/api/products')
    const products = response.data
    const action = getProducts(products)
    dispatch(action)
  }
}

export const fetchTopRated = () => {
  return async (dispatch) => {
  	const response = await axios.get('/api/products/top-rating')
  	const topRated = response.data
  	const action = getTopRated(topRated)
  	dispatch(action)
  }
}

export const createProduct = (product) => {
  return async (dispatch) => {
  	const response = await axios.post('/api/products/create', {name: product})
  	const newPro = response.data
  	const action = createAProduct(newPro)
  	dispatch(action)
  }
}

export const deleteAProduct = (product) => {
  return async (dispatch) => {
  	await axios.delete(`/api/products/${product.id}`, product)
  	const action = deleteProduct(product)
  	dispatch(action)
  }
}


//REDUCER
const reducer = (state = initialState, action) => {
  switch(action.type) {
  	
  	case GET_PRODUCTS:
  	  return {
  	  	...state,
  	  	products: action.products
  	  }

  	case GET_TOP_RATED:
  	  return {
  	  	...state,
  	  	top: action.product
  	  }

  	case WRITE_PRODUCT:
  	  return {
  	  	...state,
  	  	newProduct: action.content
  	  }

  	case CREATE_PRODUCT:
  	  return {
  	  	...state,
  	  	products: [...state.products, action.product]
  	  }

  	case DELETE_PRODUCT:
  	  const newProducts = state.products.filter(product=>product.id !== action.product.id)
  	  return {
  	  	...state,
  	  	products: newProducts
  	  }

  	default:
  	  return state
  }
}


//STORE

const store = createStore(reducer, 
						  applyMiddleware(loggingMiddleware,
						  				  thunkMiddleware))
export default store