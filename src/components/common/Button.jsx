import clsx from 'clsx'
import Spinner from './Spinner.jsx'
export default function Button({ children, variant = 'primary', loading, className = '', ...props }) {
  const base = { primary: 'btn-primary', ghost: 'btn-ghost', accent: 'btn-accent' }
  return (
    <button className={clsx(base[variant], 'flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed', className)} disabled={loading || props.disabled} {...props}>
      {loading && <Spinner className="w-4 h-4" />}
      {children}
    </button>
  )
}
