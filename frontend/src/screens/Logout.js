import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import FullPageSpinner from '../components/FullPageSpinner'

export default function Logout() {
  const { user, logout } = useContext(AuthContext)
  const Navigate = useNavigate()
  useEffect(() => {
    logout()
    if (!user) {
      Navigate('/dashboard')
    }
  }, [user])
  if (user) {
    return <FullPageSpinner />
  }

  return null
}
