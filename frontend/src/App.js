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
import EditProfilePage from './screens/EditProfile'
import ChatPage from './screens/ChatPage'
import Logout from './screens/Logout'

import { AuthContext, AuthProvider } from './context/AuthContext'
import FullPageSpinner from './components/FullPageSpinner'
import Navbar from './components/Navbar'

function Auth({ children }) {
  const auth = useContext(AuthContext)
  if (auth.loading === true) {
    return <FullPageSpinner />
  }

  return auth.user ? children : <Navigate to="/" replace />
}

function UnAuth({ children }) {
  const auth = useContext(AuthContext)
  if (auth.loading === true) {
    return <FullPageSpinner />
  }

  return auth.user ? <Navigate to="/dashboard" replace /> : children
}

function AppRoutes() {
  // console.log('app routes')
  const auth = useContext(AuthContext)
  if (auth.loading === true) {
    return <FullPageSpinner />
  }
  return (
    <Routes>
      <Route path="/developers" element={<DevelopersPage />} />
      <Route path="/profile/:username" element={<ProfilePage />} />
      <Route
        path="/"
        element={
          <UnAuth>
            <HomePage />
          </UnAuth>
        }
      />
      <Route
        path="/login"
        element={
          <UnAuth>
            <HomePage form="login" />
          </UnAuth>
        }
      />
      <Route
        path="/register"
        element={
          <UnAuth>
            <HomePage form="register" />
          </UnAuth>
        }
      />
      <Route
        path="/dashboard"
        element={
          <Auth>
            <Dashboard />
          </Auth>
        }
      />
      <Route
        path="/chat"
        element={
          <Auth>
            <ChatPage />
          </Auth>
        }
      />
      <Route
        path="/editProfile"
        element={
          <Auth>
            <EditProfilePage />
          </Auth>
        }
      />
      <Route path="/logout" element={<Logout />} />
      <Route
        path="*"
        element={
          <UnAuth>
            <HomePage />
          </UnAuth>
        }
      />
    </Routes>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Navbar />
          <AppRoutes />
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
