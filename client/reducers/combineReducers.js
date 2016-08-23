import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

const reducers = {
  routing: routerReducer,
}

const appReducer = combineReducers(reducers)

export default appReducer
