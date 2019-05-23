import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import FormInput from '../common/FormInput'
import * as actions from './actions'
import validator from '../common/validator'

export function RegistrationForm({ handleSubmit, dirty, valid, submitting }) {
  return (
    <div className="soft-half outset" style={{ width: '50%' }}>
      <form onSubmit={handleSubmit}>
        <Field name="username" component={FormInput} label="Username" />
        <Field name="email" component={FormInput} label="Email" />
        <Field name="password" component={FormInput} label="Password" type="password" />
        <button disabled={!valid || !dirty || submitting} type="submit">Submit</button>
      </form>
    </div>
  )
}

RegistrationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  dirty: PropTypes.bool,
  valid: PropTypes.bool,
  submitting: PropTypes.bool
}

function validate(values) {
  return validator(values, v => {
    v.require('username', 'email')
    v.email('email')
  })
}

const Form = reduxForm({
  form: 'registrationForm',
  validate
})(RegistrationForm)

export default connect(
  state => ({ submitting: state.user.get('submitting') }),
  { onSubmit: actions.register }
)(Form)
