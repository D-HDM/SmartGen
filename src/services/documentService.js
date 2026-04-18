import api from './api.js'
export const documentService = {
  getAll:   () => api.get('/documents'),
  getById:  (id) => api.get(`/documents/${id}`),
  save:     (data) => api.post('/documents', data),
  update:   (id, data) => api.put(`/documents/${id}`, data),
  remove:   (id) => api.delete(`/documents/${id}`),
}
