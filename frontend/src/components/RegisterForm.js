import { useReducer } from 'react'
import { Form } from './styled/Form'
import { userRegisterReducer } from '../redux/reducers/userReducer'
import { register } from '../redux/actions/userActions'
import FullPageSpinner from './FullPageSpinner'

function RegisterForm() {
  const [{ user, loading, error }, dispatch] = useReducer(userRegisterReducer, {
    loading: false,
  })

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
    <Form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Full Name</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" />
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </Form>
  )
}

export default RegisterForm
