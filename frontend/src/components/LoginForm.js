import { useReducer, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { userLoginReducer } from '../redux/reducers/userReducer'
import { login } from '../redux/actions/userActions'
import { Form } from './styled/Form'
import { AuthContext } from '../context/AuthContext'
import FullPageSpinner from './FullPageSpinner'

function LoginForm() {
  const { setUser } = useContext(AuthContext)
  const [{ loading, user }, dispatch] = useReducer(userLoginReducer, {})

  const Navigate = useNavigate()

  const handleSubmit = e => {
    const { email, password } = e.target.elements
    e.preventDefault()
    login(email.value, password.value)(dispatch)
  }
  if (loading) {
    return <FullPageSpinner />
  }
  if (user) {
    setUser(user)
    Navigate('/dashboard')
  }
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email Address</label>
        <input type="text" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </Form>
  )
}

export default LoginForm
