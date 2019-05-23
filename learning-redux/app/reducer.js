import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { pagination } from 'violet-paginator'
import { reducer as toastr } from 'react-redux-toastr'
import { reducer as form } from 'redux-form'

import todos from './TodoApp/reducer'
import recipes from './Recipes/reducer'
import user from './Users/userReducer'

export default combineReducers({
  todos,
  recipes,
  user,
  pagination,
  form,
  toastr,
  routing
})
