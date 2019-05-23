import api from '../api'
import * as pageActions from '../PagerApp/actions'

export function fetch(pageInfo) {
  return () => api.recipes.list(pageInfo.query)
}

export function prev() {
  return dispatch => {
    dispatch(pageActions.prev('recipes'))
    dispatch(fetch())
  }
}

export function next() {
  return dispatch => {
    dispatch(pageActions.next('recipes'))
    dispatch(fetch())
  }
}
