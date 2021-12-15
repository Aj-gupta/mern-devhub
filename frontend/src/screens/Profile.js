/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
// import styled from '@emotion/styled/macro'
import ProfileHeadCard from '../components/profile/ProfileHeadCard'

// const bio = styled.div``

export default function Profile() {
  return (
    <div
      css={css`
        width: 80%;
        /* padding: 50px 20px; */
        /* padding-top: 100px; */
        align-items: center;
        margin: 0 auto;
        /* display: flex; */
      `}
    >
      <ProfileHeadCard />
      <div />
    </div>
  )
}
