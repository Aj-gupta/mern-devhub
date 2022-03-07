import styled from '@emotion/styled/macro'
import { useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import { getProfileByUsername } from '../../redux/actions/profileActions'
import { getProfileByUsernameReducer } from '../../redux/reducers/profileReducer'
import BioNSkills from './BioNSkills'
import EducationNWork from './EducationNWork'
import GitCard from './GitCard'
import ProfileTop from './ProfileTop'
// import * as mq from '../../styles/media-queries'

const ProfileContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;
`

export default function Profile() {
  const { username } = useParams()
  const [{ loading, data: profile, error }, dispatch] = useReducer(
    getProfileByUsernameReducer,
    {},
  )
  console.log({ loading, profile, error })
  useEffect(() => {
    getProfileByUsername(username)(dispatch)
  }, [])

  return (
    <ProfileContainer>
      {loading && <p>loading...</p>}
      {error && <p>Error:{error.message}</p>}
      {profile && (
        <>
          <ProfileTop profile={profile} />
          <BioNSkills bio={profile?.bio} skills={profile?.skills} />
          <EducationNWork
            education={profile?.education}
            experience={profile?.experience}
          />
          <GitCard githubUsername={profile?.githubUsername} />
        </>
      )}
      {!loading && !profile && <p>Profile not found</p>}
    </ProfileContainer>
  )
}
