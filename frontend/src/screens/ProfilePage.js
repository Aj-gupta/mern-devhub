/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
// import { useParams } from 'react-router-dom'
import Profile from '../components/profile/Profile'

export default function ProfilePage() {
  // const { username } = useParams()
  return (
    <div
      css={css`
        width: 60%;
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
      `}
    >
      <Profile />
      <div />
    </div>
  )
}
