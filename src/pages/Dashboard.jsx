import { useNavigate } from 'react-router-dom'
import { FileText, PenLine, FolderOpen, TrendingUp } from 'lucide-react'
import { useAuth } from '../hooks/useAuth.js'
import { LOCAL_TEMPLATES } from '../utils/constants.js'
import TemplateCard from '../components/templates/TemplateCard.jsx'

const STATS = [
  { label: 'Templates Available', value: LOCAL_TEMPLATES.length, icon: FileText, color: 'text-slate' },
  { label: 'Documents Generated', value: '—', icon: TrendingUp, color: 'text-rust' },
  { label: 'Saved Documents', value: '—', icon: FolderOpen, color: 'text-gold' },
]

export default function Dashboard() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const recent = LOCAL_TEMPLATES.slice(0, 6)

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-slide-up">
      {/* Welcome */}
      <div className="bg-ink text-white rounded-2xl p-6 flex items-center justify-between">
        <div>
          <p className="text-white/60 text-sm mb-1">Welcome back,</p>
          <h1 className="font-display text-2xl font-semibold">{user?.name || 'User'} 👋</h1>
          <p className="text-white/60 text-sm mt-1">Ready to generate your next document?</p>
        </div>
        <button
          onClick={() => navigate('/templates')}
          className="bg-white text-ink px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-mist transition hidden sm:block"
        >
          Browse Templates →
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {STATS.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="card p-4">
            <div className="flex items-center gap-3">
              <div className={`p-2 bg-mist rounded-lg ${color}`}><Icon size={18} /></div>
              <div>
                <p className="text-xl font-bold font-mono">{value}</p>
                <p className="text-xs text-gray-500">{label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="card p-5">
        <h2 className="font-display font-semibold text-lg mb-4">Quick Start</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { label: 'New Document', icon: PenLine, to: '/editor', color: 'bg-slate text-white' },
            { label: 'All Templates', icon: FileText, to: '/templates', color: 'bg-mist text-ink' },
            { label: 'Saved Docs', icon: FolderOpen, to: '/saved', color: 'bg-mist text-ink' },
          ].map(({ label, icon: Icon, to, color }) => (
            <button
              key={label}
              onClick={() => navigate(to)}
              className={`flex items-center gap-3 p-4 rounded-xl font-medium text-sm transition hover:opacity-90 ${color}`}
            >
              <Icon size={18} />{label}
            </button>
          ))}
        </div>
      </div>

      {/* Recent Templates */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display font-semibold text-lg">Featured Templates</h2>
          <button onClick={() => navigate('/templates')} className="text-sm text-slate hover:underline">View all →</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {recent.map(t => <TemplateCard key={t.id} template={t} />)}
        </div>
      </div>
    </div>
  )
}
