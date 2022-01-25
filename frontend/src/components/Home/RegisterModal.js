import { useReducer, useState } from 'react'
import { Form, FormGroup, SubmitMessage } from '../styled/Form'
import { userRegisterReducer } from '../../redux/reducers/userReducer'
import { register } from '../../redux/actions/userActions'
import FullPageSpinner from '../FullPageSpinner'
import { Content, ModalContainer } from '../styled/ModalContainer'
import Validate, { Errors } from '../../utils/validation'

function RegisterModal({ isOpen, toggle }) {
  const [{ user, loading, error }, dispatch] = useReducer(
    userRegisterReducer,
    {},
  )
  const [validationError, setValidationError] = useState({})
  const handleSubmit = e => {
    console.log(error)
    // console.log(user, dispatch)
    e.preventDefault()
    const {
      name: { value: name },
      username: { value: username },
      email: { value: email },
      password: { value: password },
    } = e.target.elements
    console.log(name, username, email, password)
    if (!name || !email || !password || !username) {
      // console.log(loginId.value, password.value)
      const global = 'Enter all required fields'
      setValidationError({ ...validationError, global })
      return
    }
    if (
      validationError && // 👈 null and undefined check
      Object.keys(validationError).length === 0 &&
      Object.getPrototypeOf(validationError) === Object.prototype
    ) {
      register({ name, email, username, password })(dispatch)
      setValidationError({})
    } else {
      const global = 'Remove errors and then submit form'
      setValidationError({ ...validationError, global })
    }
  }

  function handleInput(e) {
    const { name } = e.target
    const { value } = e.target

    console.log('Handle Input')
    if (Validate[name](value)) {
      const { [name]: elementName, ...rest } = validationError
      // console.log(rest)
      setValidationError(rest)
    } else {
      // console.log(name, value)
      let errorMessage = Errors[name]
      if (!value) {
        errorMessage = `${name} is required`
      }
      setValidationError({ ...validationError, [name]: errorMessage })
    }
    // console.log(validationError)
  }

  let timer
  function keyUpEventHandler(e) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      handleInput(e)
    }, 600)
  }

  if (loading === true) {
    return <FullPageSpinner />
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
        <Form onSubmit={handleSubmit} noValidate>
          <SubmitMessage visible={error || validationError.global || !!user}>
            <div
              className="error"
              visible={validationError.global || error ? 'true' : 'false'}
            >
              <span className="material-icons">cancel</span>
              <p>
                {validationError.global
                  ? validationError.global
                  : `${error?.status ? error.status : ''}${
                      error && ` ${error.message}`
                    }`}
              </p>
            </div>
            <div className="success" visible={user ? 'true' : 'false'}>
              <span className="material-icons">check</span>
              <p>Successfully Signed Up</p>
            </div>
          </SubmitMessage>
          <FormGroup>
            <input
              onKeyUp={keyUpEventHandler}
              onBlur={handleInput}
              type="text"
              name="name"
              placeholder="Full Name"
              error={validationError.name ? 'true' : 'false'}
            />
            <span className="material-icons error-icon">error</span>
            <small className="error">{validationError.name}</small>
          </FormGroup>
          <FormGroup>
            <input
              onKeyUp={keyUpEventHandler}
              onBlur={handleInput}
              type="text"
              name="username"
              placeholder="Username"
              error={validationError.username ? 'true' : 'false'}
            />
            <span className="material-icons error-icon">error</span>
            <small className="error">{validationError.username}</small>
          </FormGroup>
          <FormGroup>
            <input
              onKeyUp={keyUpEventHandler}
              onBlur={handleInput}
              type="email"
              name="email"
              placeholder="Email"
              error={validationError.email ? 'true' : 'false'}
            />
            <span className="material-icons error-icon">error</span>
            <small className="error">{validationError.email}</small>
          </FormGroup>
          <FormGroup>
            <input
              onKeyUp={keyUpEventHandler}
              onBlur={handleInput}
              type="password"
              name="password"
              placeholder="Password"
              error={validationError.password ? 'true' : 'false'}
            />
            <span className="material-icons error-icon">error</span>
            <small className="error">{validationError.password}</small>
          </FormGroup>

          <div>
            <button type="submit">Sign Up</button>
          </div>
        </Form>
      </Content>
    </ModalContainer>
  )
}

export default RegisterModal
