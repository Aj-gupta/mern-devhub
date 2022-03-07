import styled from '@emotion/styled/macro'
import { useEffect, useReducer } from 'react'
import Developer from '../components/Developer'
import { getProfiles } from '../redux/actions/profileActions'
import { getProfilesReducer } from '../redux/reducers/profileReducer'
import * as mq from '../styles/media-queries'

const DevelopersContainer = styled.div`
  background-color: #fafafa;
  width: 60%;
  margin: 0 auto;
  /* min-height: 92vh; */
  padding: 1em;
  ${mq.small} {
    width: 100%;
  }
`

const Developers = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  h3 {
    margin: 10px 0;
  }

  h6 {
    margin: 5px 0;
    text-transform: uppercase;
  }
`

export default function DevelopersPage() {
  const [{ loading, data, error }, dispatch] = useReducer(
    getProfilesReducer,
    {},
  )
  console.log({ loading, data, error })
  useEffect(() => {
    getProfiles(dispatch)
  }, [])
  return (
    <DevelopersContainer>
      <Developers>
        {loading && <p>loading...</p>}
        {error && <p>Error:{error.message}</p>}
        {data &&
          data.length !== 0 &&
          data.map(dev => <Developer key={dev?.user?.username} dev={dev} />)}
        {data && data.length === 0 && <p>Developers not found</p>}
      </Developers>
    </DevelopersContainer>
  )
}
