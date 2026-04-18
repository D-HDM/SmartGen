import api from './api.js'
export const templateService = {
  getAll:  () => api.get('/templates'),
  getById: (id) => api.get(`/templates/${id}`),
}
