export const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
export const isRequired = (v) => v !== null && v !== undefined && String(v).trim() !== ''
export const minLength = (v, n) => String(v).length >= n

export function validateLoginForm({ email, password }) {
  const errors = {}
  if (!isEmail(email)) errors.email = 'Enter a valid email address'
  if (!isRequired(password)) errors.password = 'Password is required'
  return errors
}

export function validateRegisterForm({ name, email, password }) {
  const errors = {}
  if (!isRequired(name)) errors.name = 'Full name is required'
  if (!isEmail(email)) errors.email = 'Enter a valid email address'
  if (!minLength(password, 6)) errors.password = 'Password must be at least 6 characters'
  return errors
}
