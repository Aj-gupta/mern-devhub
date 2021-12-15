/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled/macro'
import { useState } from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
// import RegisterForm from '../components/RegisterForm'
// import { Button } from '../components/styled/Form'
// import TopButton from '../components/styled/TopButton'

const acitveButtonStyles = `
  color: #fff !important;
  box-shadow: 0 0 20px #2a2a2a;
  background: linear-gradient(#68dac7, #54c7ba) !important;
  transition: all 0.3s ease;
`
const Button = styled.button`
  color: #cacaca;
  border: none;
  width: 90px;
  margin: -2px;
  padding: 10px;
  font-size: 16px;
  font-weight: 300;
  background: #4c5c72;
  cursor: pointer;
  border-radius: 0 50px 50px 0;
  ${({ active = false }) => active && acitveButtonStyles}
`
// const ButtonContainer = styled.div`
//   position: relative;
//   display: block;
//   width: 100%;
//   height: 15%;
//   padding: 25px;
//   text-align: right;
// `
const Home = styled.div`
  background: linear-gradient(to right, #232f41, #374a62);
  .button-container {
    position: relative;
    display: block;
    width: 100%;
    height: 15%;
    padding: 25px;
    text-align: right;
  }
`

function HomePage() {
  // return <LoginForm />
  const [form, setForm] = useState('login')
  return (
    <Home>
      <div className="button-container">
        <Button
          css={css`
            border-radius: 50px 0 0 50px;
          `}
          onClick={() => setForm('login')}
          active={form === 'login'}
        >
          Login
        </Button>
        <Button
          css={css`
            border-radius: 0 50px 50px 0;
          `}
          onClick={() => setForm('register')}
          active={form === 'register'}
        >
          Register
        </Button>
      </div>
      {form === 'login' ? <LoginForm /> : <RegisterForm />}
    </Home>
  )
}

export default HomePage
