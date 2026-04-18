import { NavLink, useNavigate } from 'react-router-dom'
import { LayoutDashboard, FileText, PenLine, FolderOpen, Settings, LogOut, X } from 'lucide-react'
import { useAuth } from '../../hooks/useAuth.js'
import clsx from 'clsx'

const NAV = [
  { to: '/',          label: 'Dashboard',    icon: LayoutDashboard },
  { to: '/templates', label: 'Templates',    icon: FileText },
  { to: '/editor',    label: 'New Document', icon: PenLine },
  { to: '/saved',     label: 'Saved Docs',   icon: FolderOpen },
  { to: '/settings',  label: 'Settings',     icon: Settings },
]

export default function Sidebar({ open, onClose }) {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => { logout(); navigate('/login') }

  return (
    <>
      {open && <div className="fixed inset-0 bg-black/30 z-20 lg:hidden" onClick={onClose} />}
      <aside className={clsx(
        'fixed inset-y-0 left-0 z-30 w-56 bg-white border-r border-mist flex flex-col no-print transition-transform duration-200',
        'lg:relative lg:translate-x-0 lg:z-auto',
        open ? 'translate-x-0' : '-translate-x-full'
      )}>
        <div className="flex items-center justify-between p-4 border-b border-mist">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-ink rounded-xl flex items-center justify-center">
              <span className="text-white text-sm font-bold font-display">H</span>
            </div>
            <div>
              <p className="text-sm font-bold font-display text-ink">HDM</p>
              <p className="text-[10px] text-gray-400 -mt-0.5">Generator Studio</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded lg:hidden hover:bg-mist"><X size={16}/></button>
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {NAV.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={onClose}
              className={({ isActive }) => clsx('sidebar-link', isActive && 'active')}
            >
              <Icon size={16} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-3 border-t border-mist">
          <button onClick={handleLogout} className="sidebar-link w-full text-rust hover:bg-red-50">
            <LogOut size={16} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  )
}
