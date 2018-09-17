import { createStore, applyMiddleware } from 'redux'
import loggingMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'


//INITIAL STATE
const initialState = {
  products: []
}


//ACTION TYPES
const GET_PRODUCTS = 'GET_PRODUCTS'


//ACTION CREATORS
export const getProducts = (products) => ({
  type: GET_PRODUCTS,
  products
})


//THUNK CREATORS
const fetchProducts = () => {
  return async (dispatch) => {
    const response = await axios.get('/api/products')
    const products = response.data
    const action = getProducts(products)
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

  	default:
  	  return state
  }
}


//STORE

const store = createStore(reducer, applyMiddleware(loggingMiddleware))
export default store