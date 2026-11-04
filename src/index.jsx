import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { Main } from './components'

const store = createStore(rootReducer, applyMiddleware(thunk))

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Main />
  </Provider>
)
