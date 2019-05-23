import { replace } from 'react-router-redux'
import { toastr } from 'react-redux-toastr'
import { SubmissionError } from 'redux-form'

import api from '../api'
import * as actionTypes from './actionTypes'

export function submitting() {
  return { type: actionTypes.SUBMIT }
}

export function created(user) {
  return {
    type: actionTypes.CREATED,
    user
  }
}

export function createdError() {
  return {
    type: actionTypes.CREATED_ERROR
  }
}

export function register(user) {
  return dispatch => {
    dispatch(submitting())

    return api.users.create(user).then(resp => {
      dispatch(replace('/recipes'))
      toastr.success('Saved!', `User ${resp.data.username} created!`)
      return dispatch(created(resp.data))
    }).catch(error => {
      toastr.error('Could not create user!')
      dispatch(createdError())
      throw new SubmissionError(error.response.data.errors)
    })
  }
}
