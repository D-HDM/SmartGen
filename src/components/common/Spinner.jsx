import clsx from 'clsx'
export default function Spinner({ className = '' }) {
  return <div className={clsx('animate-spin rounded-full border-2 border-current border-t-transparent w-5 h-5', className)} />
}
