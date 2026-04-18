import { Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './context/AuthContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import MainLayout from './components/layout/MainLayout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import TemplatesPage from './pages/TemplatesPage.jsx'
import EditorPage from './pages/EditorPage.jsx'
import SavedDocumentsPage from './pages/SavedDocumentsPage.jsx'
import SettingsPage from './pages/SettingsPage.jsx'
import Login from './pages/Auth/Login.jsx'
import Register from './pages/Auth/Register.jsx'
import NotFound from './pages/NotFound.jsx'
import { useAuth } from './hooks/useAuth.js'

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  if (loading) return <div className="min-h-screen bg-paper flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-2 border-ink border-t-transparent"/></div>
  return user ? children : <Navigate to="/login" replace />
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Toaster position="top-right" toastOptions={{ style: { fontFamily: 'DM Sans, sans-serif', fontSize: '14px' } }} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
            <Route index element={<Dashboard />} />
            <Route path="templates" element={<TemplatesPage />} />
            <Route path="editor/:templateId?" element={<EditorPage />} />
            <Route path="saved" element={<SavedDocumentsPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  )
}
