import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth.js'
import { validateLoginForm } from '../../utils/validators.js'
import toast from 'react-hot-toast'
import { LogIn } from 'lucide-react'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [fields, setFields] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const set = (k, v) => setFields(f => ({ ...f, [k]: v }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validateLoginForm(fields)
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    try {
      await login(fields.email, fields.password)
      navigate('/')
    } catch (err) {
      toast.error(err.response?.data?.message || 'Invalid credentials')
    } finally { setLoading(false) }
  }

  return (
    <div className="min-h-screen bg-paper flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-ink rounded-2xl flex items-center justify-center mx-auto mb-3">
            <span className="text-white text-xl font-bold font-display">H</span>
          </div>
          <h1 className="font-display text-2xl font-semibold">Sign in to HDM</h1>
          <p className="text-sm text-gray-400 mt-1">Your document generation studio</p>
        </div>

        <div className="card p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="form-label">Email</label>
              <input type="email" className={`form-input ${errors.email ? 'border-red-400' : ''}`}
                value={fields.email} onChange={e => set('email', e.target.value)} placeholder="you@example.com" />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="form-label">Password</label>
              <input type="password" className={`form-input ${errors.password ? 'border-red-400' : ''}`}
                value={fields.password} onChange={e => set('password', e.target.value)} placeholder="••••••••" />
              {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
            </div>
            <button type="submit" disabled={loading} className="btn-primary w-full justify-center">
              <LogIn size={15} /> {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>
        </div>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account?{' '}
          <Link to="/register" className="text-slate font-medium hover:underline">Create one</Link>
        </p>
      </div>
    </div>
  )
}
