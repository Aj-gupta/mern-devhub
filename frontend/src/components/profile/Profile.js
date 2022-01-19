import styled from '@emotion/styled/macro'
import BioNSkills from './BioNSkills'
import EducationNWork from './EducationNWork'
import GitCard from './GitCard'
import ProfileTop from './ProfileTop'

const ProfileContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 0;
`

export default function Profile() {
  return (
    <ProfileContainer>
      <ProfileTop />
      <BioNSkills />
      <EducationNWork />
      <GitCard />
    </ProfileContainer>
  )
}
