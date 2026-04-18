import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth.js'
import { validateRegisterForm } from '../../utils/validators.js'
import toast from 'react-hot-toast'
import { UserPlus } from 'lucide-react'

export default function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [fields, setFields] = useState({ name: '', email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const set = (k, v) => setFields(f => ({ ...f, [k]: v }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validateRegisterForm(fields)
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    try {
      await register(fields.name, fields.email, fields.password)
      navigate('/')
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed')
    } finally { setLoading(false) }
  }

  return (
    <div className="min-h-screen bg-paper flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-ink rounded-2xl flex items-center justify-center mx-auto mb-3">
            <span className="text-white text-xl font-bold font-display">H</span>
          </div>
          <h1 className="font-display text-2xl font-semibold">Create Account</h1>
          <p className="text-sm text-gray-400 mt-1">Join HDM Generator Studio</p>
        </div>

        <div className="card p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { key: 'name', label: 'Full Name', type: 'text', ph: 'John Doe' },
              { key: 'email', label: 'Email', type: 'email', ph: 'you@example.com' },
              { key: 'password', label: 'Password', type: 'password', ph: 'Min. 6 characters' },
            ].map(({ key, label, type, ph }) => (
              <div key={key}>
                <label className="form-label">{label}</label>
                <input type={type} className={`form-input ${errors[key] ? 'border-red-400' : ''}`}
                  value={fields[key]} onChange={e => set(key, e.target.value)} placeholder={ph} />
                {errors[key] && <p className="text-xs text-red-500 mt-1">{errors[key]}</p>}
              </div>
            ))}
            <button type="submit" disabled={loading} className="btn-primary w-full justify-center">
              <UserPlus size={15} /> {loading ? 'Creating…' : 'Create Account'}
            </button>
          </form>
        </div>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-slate font-medium hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  )
}
