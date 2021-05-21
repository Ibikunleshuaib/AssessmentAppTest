import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Home from './app/containers/Home'


function dataBroughtIn(state, data) {
  return data
}

function datatReducer(state = '', action) {
  switch (action.type) { 
    case 'GET_TIME':
      return dataBroughtIn(state, action.payload)
    default: 
        return state
  } 
}
const store = createStore(datatReducer)
export default () => ( 
  <Provider store={store}>
    <Home />
  </Provider>
)
