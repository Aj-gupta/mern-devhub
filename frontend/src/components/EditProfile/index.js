import styled from '@emotion/styled/macro'
import { useState } from 'react'
import EditProfile from './EditProfile'
import EditEducation from './EditEducation'
import EditExperience from './EditExperience'

const MenuButton = styled.button`
  border: none;
  border-left: 3px solid #2b70ba;
  outline: none;
  width: 100%;
  cursor: pointer;
  h3 {
    font-style: inherit;
    font-weight: 600;
  }
  '&:hover': {
    color: #2b70ba;
    background: white;
    border-left-width: 6px;
  }
  ${({ active = false }) =>
    active &&
    `
      color: #2b70ba;
      background: white;
      border-left-width: 6px;
    `}
`

const Menu = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 0;
  vertical-align: top;
  ul {
    list-style: none;
    margin-top: 1.5em;
    padding: 2em;
  }
  ul > li {
    margin-top: 5px;
  }
`
const Body = styled.div`
  display: inline-block;
  padding: 2em;
  small {
    display: block;
    margin: 1em;
  }
`

export default function ProfileEdit() {
  const [tab, setTab] = useState('profile')
  return (
    <>
      <Menu>
        <ul>
          <li>
            <MenuButton
              active={tab === 'profile'}
              onClick={() => setTab('profile')}
            >
              <h3>Edit Profile</h3>
            </MenuButton>
          </li>
          <li>
            <MenuButton
              active={tab === 'experience'}
              onClick={() => setTab('experience')}
            >
              <h3>Edit Experience</h3>
            </MenuButton>
          </li>
          <li>
            <MenuButton
              active={tab === 'education'}
              onClick={() => setTab('education')}
            >
              <h3>Edit Education</h3>
            </MenuButton>
          </li>
        </ul>
      </Menu>
      <Body>
        {tab === 'profile' && <EditProfile />}
        {tab === 'experience' && <EditExperience />}
        {tab === 'education' && <EditEducation />}
      </Body>
    </>
  )
}
