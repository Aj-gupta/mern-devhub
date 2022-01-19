import styled from '@emotion/styled/macro'
import Developers from '../components/Developers'

const DevelopersContainer = styled.div`
  background-color: #fafafa;
  width: 60%;
  margin: 0 auto;
  min-height: 92vh;
  padding: 1em;
`

export default function DevelopersPage() {
  return (
    <DevelopersContainer>
      <Developers />
    </DevelopersContainer>
  )
}
