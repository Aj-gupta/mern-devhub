/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import Profile from '../components/profile/Profile'

export default function ProfilePage() {
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
