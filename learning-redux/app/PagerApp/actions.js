import * as actionTypes from './actionTypes'
import { resolveActionType } from './utils'

export function prev(id) {
  return { type: resolveActionType(actionTypes.PREV, id) }
}

export function next(id) {
  return { type: resolveActionType(actionTypes.NEXT, id) }
}

