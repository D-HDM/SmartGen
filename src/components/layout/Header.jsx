import { Menu, Bell } from 'lucide-react'
import { useAuth } from '../../hooks/useAuth.js'
import ThemeToggle from '../common/ThemeToggle.jsx'

export default function Header({ onMenuClick }) {
  const { user } = useAuth()
  return (
    <header className="bg-white border-b border-mist px-4 md:px-6 py-3 flex items-center justify-between no-print shrink-0">
      <div className="flex items-center gap-3">
        <button onClick={onMenuClick} className="p-2 rounded-lg hover:bg-mist transition lg:hidden">
          <Menu size={18} />
        </button>
        <div className="hidden md:flex items-center gap-2">
          <div className="w-7 h-7 bg-ink rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold font-display">H</span>
          </div>
          <span className="font-display font-semibold text-lg text-ink">HDM Generator</span>
          <span className="text-xs bg-rust/10 text-rust px-2 py-0.5 rounded-full font-medium ml-1">Beta</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <button className="p-2 rounded-lg hover:bg-mist transition relative">
          <Bell size={17} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-rust rounded-full"></span>
        </button>
        <div className="flex items-center gap-2 ml-1 pl-3 border-l border-mist">
          <div className="w-8 h-8 bg-slate rounded-full flex items-center justify-center text-white text-sm font-semibold">
            {user?.name?.[0]?.toUpperCase() || 'U'}
          </div>
          <span className="hidden md:block text-sm font-medium text-gray-700">{user?.name || 'User'}</span>
        </div>
      </div>
    </header>
  )
}
