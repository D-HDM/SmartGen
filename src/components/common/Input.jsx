import clsx from 'clsx'
export default function Input({ label, error, className = '', ...props }) {
  return (
    <div className="space-y-1">
      {label && <label className="form-label">{label}</label>}
      <input className={clsx('form-input', error && 'border-red-400', className)} {...props} />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}
