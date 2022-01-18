import styled from '@emotion/styled/macro'
import { useContext, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import FullPageSpinner from '../components/FullPageSpinner'
import Home from '../components/Home/Home'
import LoginModal from '../components/Home/LoginModal'
import RegisterModal from '../components/Home/RegisterModal'

const HomeContainer = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  height: 92vh;
  background: url('background.svg') no-repeat center center/cover;
`

function HomePage({ form = 'none' }) {
  const auth = useContext(AuthContext)
  const Navigate = useNavigate()

  const [formState, toggleForm] = useState(form)
  const toggleModal = useCallback(d => toggleForm(d), [toggleForm])

  if (auth.loading === true) {
    return <FullPageSpinner />
  }

  if (auth.isLogin) {
    Navigate('/dashboard')
  }
  return (
    <HomeContainer>
      <LoginModal isOpen={formState === 'login'} toggle={toggleForm} />
      <RegisterModal isOpen={formState === 'register'} toggle={toggleForm} />
      <Home toggle={toggleModal} />
    </HomeContainer>
  )
}

export default HomePage
