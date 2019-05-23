import React, { PropTypes } from 'react'
import classnames from 'classnames'

export default function FormInput({
  label,
  input,
  meta: { touched, error },
  type = 'text'
}) {
  const classes = classnames('form-group', { error: touched && error })

  return (
    <div className={classes}>
      <label htmlFor={input.name}>{label}</label>
      <input {...input} type={type} />
    </div>
  )
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.arrayOf(PropTypes.string)
  }),
  type: PropTypes.string
}
