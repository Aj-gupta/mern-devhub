import styled from '@emotion/styled/macro'
import CreatePost from '../components/post/CreatePost'
import Posts from '../components/post/Posts'
import * as mq from '../styles/media-queries'

const DashboardContainer = styled.div`
  background-color: #fafafa;
  width: 60%;
  margin: 0 auto;
  min-height: 92vh;
  padding: 2em;
  ${mq.small} {
    width: 100%;
  }
`

export default function Dashboad() {
  return (
    <DashboardContainer>
      <CreatePost />
      <Posts />
    </DashboardContainer>
  )
}
