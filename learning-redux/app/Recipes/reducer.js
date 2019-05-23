import Immutable, { Map, List } from 'immutable'
import { resolveEach } from 'redux-resolver'
import * as actionTypes from './actionTypes'

const initialState = Map({
  recipes: List(),
  totalCount: 0,
  loading: false,
  error: null
})

function fetching(state) {
  return state.set('loading', true)
}

function fetchSuccess(state, action) {
  return state.merge({
    loading: false,
    recipes: Immutable.fromJS(action.recipes),
    totalCount: action.totalCount
  })
}

function fetchError(state, action) {
  return state.merge({
    loading: false,
    error: action.error
  })
}

export default resolveEach(initialState, {
  [actionTypes.FETCHING]: fetching,
  [actionTypes.FETCH_SUCCESS]: fetchSuccess,
  [actionTypes.FETCH_ERROR]: fetchError
})
