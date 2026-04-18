import api from './api.js'
export const authService = {
  login:    (email, password) => api.post('/auth/login', { email, password }),
  register: (name, email, password) => api.post('/auth/register', { name, email, password }),
  me:       () => api.get('/auth/me'),
  logout:   () => api.post('/auth/logout'),
}
