import { resolveEach } from 'redux-resolver'
import { Map } from 'immutable'
import * as actionTypes from './actionTypes'
import { resolveActionType } from './utils'

const initialState = Map({ page: 1 })

function next(state) {
  return state.set('page', state.get('page') + 1)
}

function prev(state) {
  return state.set('page', Math.max(1, state.get('page') - 1))
}

export default function paginate(id) {
  return resolveEach(initialState, {
    [resolveActionType(actionTypes.NEXT, id)]: next,
    [resolveActionType(actionTypes.PREV, id)]: prev
  })
}
