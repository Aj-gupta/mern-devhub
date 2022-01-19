import styled from '@emotion/styled/macro'
import EditProfile from '../components/EditProfile'

const EditProfileContainer = styled.div`
  background-color: #f0f2f5;
  margin: 0 auto;
  width: 60%;
`

export default function EditProfilePage() {
  return (
    <EditProfileContainer>
      <EditProfile />
    </EditProfileContainer>
  )
}
