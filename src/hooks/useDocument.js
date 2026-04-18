import { useState, useRef, useCallback } from 'react'
import { useReactToPrint } from 'react-to-print'

export function useDocument() {
  const [formData, setFormData] = useState({})
  const printRef = useRef(null)

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: 'HDM-Document',
  })

  const updateField = useCallback((name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }, [])

  const resetForm = useCallback((schema) => {
    const defaults = {}
    schema.forEach(f => { defaults[f.name] = f.default || '' })
    setFormData(defaults)
  }, [])

  return { formData, setFormData, updateField, resetForm, printRef, handlePrint }
}
