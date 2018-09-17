import React from 'react'
import ReactDOM, {render} from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import ProductList from './components/ProductList'
import store from './store'

render(
  <Provider>
    <Router>
      <ProductList />
    </Router>
  </Provider>,
  document.getElementById('main')
)