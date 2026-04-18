/**
 * Triggers browser print for the element matching the given selector.
 * Falls back to window.print() if react-to-print is not used.
 */
export function triggerPrint() {
  window.print()
}

export function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-KE', { year: 'numeric', month: 'long', day: 'numeric' })
}
