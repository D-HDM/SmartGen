import { useState, useEffect } from 'react'
import { LOCAL_TEMPLATES } from '../utils/constants.js'

export function useTemplates() {
  const [templates] = useState(LOCAL_TEMPLATES)
  const [filtered, setFiltered] = useState(LOCAL_TEMPLATES)
  const [category, setCategory] = useState('all')
  const [search, setSearch] = useState('')

  useEffect(() => {
    let result = templates
    if (category !== 'all') result = result.filter(t => t.category === category)
    if (search.trim()) result = result.filter(t => t.name.toLowerCase().includes(search.toLowerCase()))
    setFiltered(result)
  }, [category, search, templates])

  const categories = ['all', ...new Set(templates.map(t => t.category))]
  return { templates, filtered, category, setCategory, search, setSearch, categories }
}
