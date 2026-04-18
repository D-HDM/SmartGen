import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme.js'
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-mist transition" title="Toggle theme">
      {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  )
}
