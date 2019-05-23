import { Map } from 'immutable'
import { resolveEach } from 'redux-resolver'
import * as actionTypes from './actionTypes'

export const initialState = Map({
  user: Map(),
  submitting: false
})

function submitting(state) {
  return state.set('submitting', true)
}

function created(state, action) {
  return state.merge({
    user: action.user,
    submitting: false
  })
}

function error(state) {
  return state.set('submitting', false)
}

export default resolveEach(initialState, {
  [actionTypes.SUBMIT]: submitting,
  [actionTypes.CREATED]: created,
  [actionTypes.CREATED_ERROR]: error
})
