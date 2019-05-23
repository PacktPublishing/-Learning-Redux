import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import { configurePageParams } from 'violet-paginator'
import ReduxToastr from 'react-redux-toastr'

import reducer from './reducer'

import routes from './routes'
import DevTools from './DevTools'

configurePageParams({
  perPage: 'results_per_page'
})

const router = routerMiddleware(browserHistory)
const store = createStore(
  reducer,
  compose(applyMiddleware(router, thunk), DevTools.instrument())
)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render((
  <Provider store={store}>
    <div>
      <DevTools />
      <ReduxToastr />
      <Router history={history}>
        {routes}
      </Router>
    </div>
  </Provider>
), document.getElementById('app'))
