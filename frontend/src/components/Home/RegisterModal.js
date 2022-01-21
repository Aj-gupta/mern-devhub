import { useReducer } from 'react'
import { Form } from '../styled/Form'
import { userRegisterReducer } from '../../redux/reducers/userReducer'
import { register } from '../../redux/actions/userActions'
import FullPageSpinner from '../FullPageSpinner'
import { Content, ModalContainer } from '../styled/ModalContainer'

function RegisterModal({ isOpen, toggle }) {
  const [{ user, loading, error }, dispatch] = useReducer(
    userRegisterReducer,
    {},
  )

  const handleSubmit = e => {
    console.log(user, dispatch)
    e.preventDefault()
    const {
      name: { value: name },
      username: { value: username },
      email: { value: email },
      password: { value: password },
    } = e.target.elements
    console.log(name, username, email, password)
    register({ name, email, username, password })(dispatch)
  }
  if (loading === true) {
    return <FullPageSpinner />
  }
  if (error) {
    return <div>Error:{error.message}</div>
  }
  return (
    <ModalContainer isOpen={isOpen}>
      <Content>
        <header>
          <h2>Sign Up</h2>
          <button type="button" onClick={() => toggle(false)}>
            <span className="material-icons">close</span>
          </button>
        </header>
        <Form onSubmit={handleSubmit}>
          <div>
            <input type="text" name="name" placeholder="Full Name" />
          </div>
          <div>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
          <div>
            <button type="submit">Sign Up</button>
          </div>
        </Form>
      </Content>
    </ModalContainer>
  )
}

export default RegisterModal
