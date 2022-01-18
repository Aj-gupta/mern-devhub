import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { useContext } from 'react'
import HomePage from './screens/HomePage'
import Dashboard from './screens/Dashboard'
import DevelopersPage from './screens/Developers'
import ProfilePage from './screens/ProfilePage'

import { AuthContext, AuthProvider } from './context/AuthContext'
import FullPageSpinner from './components/FullPageSpinner'
// import CreatePost from './components/post/CreatePost'
import Navbar from './components/Navbar'

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
      <Route path="/" element={<HomePage />} />
      <Route path="/developers" element={<DevelopersPage />} />
      <Route path="/login" element={<HomePage form="login" />} />
      <Route path="/register" element={<HomePage form="register" />} />
      <Route
        path="/dashboard"
        element={
          <Auth>
            <Dashboard />
          </Auth>
        }
      />
      <Route
        path="/post"
        element={
          <Auth>
            <HomePage />
          </Auth>
        }
      />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar />
          <AppRoutes />
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App
