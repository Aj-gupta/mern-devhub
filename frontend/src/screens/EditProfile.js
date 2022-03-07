import styled from '@emotion/styled/macro'
import EditProfile from '../components/EditProfile'
import * as mq from '../styles/media-queries'

const EditProfileContainer = styled.div`
  background-color: #f0f2f5;
  margin: 0 auto;

  /* justify-content: center; */
  width: 70%;

  ${mq.small} {
    width: 100%;
  }
`

export default function EditProfilePage() {
  return (
    <EditProfileContainer>
      <EditProfile />
    </EditProfileContainer>
  )
}
