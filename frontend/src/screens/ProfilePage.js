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
        margin: 0 auto;
        /* align-items: center; */
      `}
    >
      <Profile />
      <div />
    </div>
  )
}
