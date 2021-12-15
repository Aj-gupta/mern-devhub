import { Form } from './styled/Form'

function LoginForm() {
  return (
    <Form>
      <div>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" />
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
