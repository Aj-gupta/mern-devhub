import { Form } from './styled/Form'

function RegisterForm() {
  return (
    <Form>
      <div>
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" />
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </Form>
  )
}

export default RegisterForm
