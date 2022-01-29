import { useContext, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { login } from '../../redux/actions/userActions'
import { userLoginReducer } from '../../redux/reducers/userReducer'
import FullPageSpinner from '../FullPageSpinner'
import { Form, FormGroup, SubmitMessage } from '../styled/Form'
import { ModalContainer, Content } from '../styled/ModalContainer'
import Validate, { Errors } from '../../utils/validation'

export default function LoginModal({ isOpen, toggle }) {
  const { setUser } = useContext(AuthContext)
  const [{ loading, user, error }, dispatch] = useReducer(userLoginReducer, {})
  const [validationError, setValidationError] = useState({})

  const Navigate = useNavigate()

  function handleInput(e) {
    const { name } = e.target
    const { value } = e.target

    console.log('Handle Input Blur')
    if (Validate[name](value)) {
      const { [name]: elementName, ...rest } = validationError
      // console.log(rest)
      setValidationError(rest)
    } else {
      // console.log(name, value)
      let errorMessage = Errors[name]

      if (!value) {
        const fieldname = name === 'loginId' ? 'email or username' : name
        errorMessage = `${fieldname} is required`
      }
      if (name === 'password' && value) {
        const { password, ...rest } = validationError
        setValidationError(rest)
      } else {
        setValidationError({ ...validationError, [name]: errorMessage })
      }
    }
    // console.log(name, Validate.loginId(value))
  }
  let timer
  function keyUpEventHandler(e) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      handleInput(e)
    }, 600)
  }

  const onKeyDownHandler = () => {
    clearTimeout(timer)
  }
  const handleSubmit = e => {
    // console.log(validationError)

    e.preventDefault()
    const { loginId, password } = e.target.elements

    if (!loginId.value || !loginId.value) {
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
      login(loginId.value, password.value)(dispatch)
      setValidationError({})
    } else {
      const global = 'Remove errors and then submit form'
      setValidationError({ ...validationError, global })
    }
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
        <Form method="POST" onSubmit={handleSubmit} noValidate>
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
              <p>Successfully Signed In</p>
            </div>
          </SubmitMessage>
          <FormGroup>
            <input
              placeholder="Email Or Username"
              type="text"
              name="loginId"
              onKeyUp={keyUpEventHandler}
              onKeyDown={onKeyDownHandler}
              onBlur={handleInput}
              error={validationError.loginId ? 'true' : 'false'}
            />
            <span className="material-icons error-icon">error</span>
            <small className="error">{validationError.loginId}</small>
          </FormGroup>
          <FormGroup>
            <input
              placeholder="Password"
              type="password"
              name="password"
              onKeyUp={keyUpEventHandler}
              onKeyDown={onKeyDownHandler}
              onBlur={handleInput}
              error={validationError.password ? 'true' : 'false'}
            />

            <small className="error">{validationError.password}</small>
          </FormGroup>
          <button type="submit">Login</button>
        </Form>
      </Content>
    </ModalContainer>
  )
}
