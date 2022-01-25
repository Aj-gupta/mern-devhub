import styled from '@emotion/styled/macro'
import { useState, useCallback, useEffect } from 'react'
import Home from '../components/Home/Home'
import LoginModal from '../components/Home/LoginModal'
import RegisterModal from '../components/Home/RegisterModal'

const HomeContainer = styled.div`
  position: relative;
  top: 0;
  margin: 0;
  padding: 0;
  height: 92vh;
  width: 100%;
  overflow: hidden;
  background: url('background.svg') no-repeat center center/cover;
`

function HomePage({ form = 'none' }) {
  const [formState, toggleForm] = useState('none')
  const toggleModal = useCallback(d => toggleForm(d), [toggleForm])

  useEffect(() => {
    toggleForm(form)
  }, [form])

  return (
    <HomeContainer>
      <LoginModal isOpen={formState === 'login'} toggle={toggleForm} />
      <RegisterModal isOpen={formState === 'register'} toggle={toggleForm} />
      <Home toggle={toggleModal} />
    </HomeContainer>
  )
}

export default HomePage
