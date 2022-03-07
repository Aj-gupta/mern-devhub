/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
// import { useParams } from 'react-router-dom'
import Profile from '../components/profile/Profile'
import * as mq from '../styles/media-queries'

export default function ProfilePage() {
  // const { username } = useParams()
  return (
    <div
      css={css`
        width: 60%;
        margin: 0 auto;
        ${mq.medium} {
          width: 80%;
          margin: 0 auto;
        }
        ${mq.small} {
          width: 90%;
        }
        ${mq.extraSmall} {
          width: 100%;
        }
        /* align-items: center; */
      `}
    >
      <Profile />
      <div />
    </div>
  )
}
