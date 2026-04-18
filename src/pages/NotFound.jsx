import { useNavigate } from 'react-router-dom'
export default function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-paper flex flex-col items-center justify-center text-center p-6">
      <p className="font-display text-8xl font-bold text-mist">404</p>
      <h1 className="text-2xl font-semibold mt-4">Page not found</h1>
      <p className="text-gray-400 mt-2 text-sm">This page doesn't exist or was moved.</p>
      <button onClick={() => navigate('/')} className="btn-primary mt-6">Go Home</button>
    </div>
  )
}
