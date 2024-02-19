export const required = (value) => {
  return value?.length ? null : 'Field is required'
}

export const requiredCheckbox = (value) => {
  return value ? null : 'Checkbox is required'
}

export const email = (value) => {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Email Field is invalid' : null
}

export const maxLength = (max) => (value) => {
  return value.length <= max ? null : `Field has exceeded ${max} characters`
}

export const minLength = (min) => (value) => {
  return value.length >= min ? null : `Field should have at least ${min} characters`
}