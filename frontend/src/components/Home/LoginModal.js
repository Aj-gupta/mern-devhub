import { useContext, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { login } from '../../redux/actions/userActions'
import { userLoginReducer } from '../../redux/reducers/userReducer'
import FullPageSpinner from '../FullPageSpinner'
import { Form } from '../styled/Form'
import { ModalContainer, Content } from '../styled/ModalContainer'

export default function LoginModal({ isOpen, toggle }) {
  const { setUser } = useContext(AuthContext)
  const [{ loading, user }, dispatch] = useReducer(userLoginReducer, {})

  const Navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    const { loginId, password } = e.target.elements

    login(loginId.value, password.value)(dispatch)
  }
  if (loading) {
    return <FullPageSpinner />
  }
  if (user) {
    setUser(user)
    Navigate('/dashboard')
  }
  return (
    <ModalContainer isOpen={isOpen}>
      <Content>
        <header>
          <h2>Login</h2>
          <button type="button" onClick={() => toggle(false)}>
            <span className="material-icons">close</span>
          </button>
        </header>
        <Form onSubmit={handleSubmit}>
          <input placeholder="Email Or Username" type="text" name="loginId" />
          <input placeholder="Password" type="password" name="password" />
          <button type="submit">Login</button>
        </Form>
      </Content>
    </ModalContainer>
  )
}
