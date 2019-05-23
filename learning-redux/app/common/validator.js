import email from 'email-validator'

function required(value) {
  if (!value) {
    return 'required'
  }
}

function validEmail(value) {
  if (value && !email.validate(value)) {
    return 'email_invalid'
  }
}

export default function validator(values, validations) {
  const errors = {}

  function validateFields(rule, fields) {
    fields.forEach(f => {
      const error = rule(values[f])
      if (error) {
        errors[f] = (errors[f] || []).concat(error)
      }
    })
  }

  const v = {
    require: (...fieldNames) => {
      validateFields(required, fieldNames)
    },
    email: (...fieldNames) => {
      validateFields(validEmail, fieldNames)
    }
  }

  validations(v)
  return errors
}
