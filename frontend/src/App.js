import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { useContext } from 'react'
import HomePage from './screens/HomePage'
import Dashboard from './screens/Dashboard'
import { AuthContext, AuthProvider } from './context/AuthContext'
import FullPageSpinner from './components/FullPageSpinner'

function Auth({ children }) {
  const auth = useContext(AuthContext)
  if (auth.loading === true) {
    return <FullPageSpinner />
  }

  return auth.isLogin === true ? children : <Navigate to="/" replace />
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route
        path="/dashboard"
        element={
          <Auth>
            <Dashboard />
          </Auth>
        }
      />
    </Routes>
  )
}

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App
