import styled from '@emotion/styled/macro'
import { Link } from 'react-router-dom'
import * as mq from '../styles/media-queries'

const Content = styled.div`
  margin: 10px;
  min-height: 30vh;
  max-height: 100%;
  vertical-align: middle;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* min-width: 150px; */
  img {
    border: 1px solid #03bfcb;
    border-radius: 50%;
    padding: 7px;
    width: 50%;
  }
`
const Bio = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  a {
    background-color: rgba(33, 131, 222, 1);
    color: #fff;
    border: 1px solid #03bfcb;
    cursor: pointer;
    text-decoration: none;
    border-radius: 3px;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    padding: 10px 25px;
  }
  a:hover {
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.3);
  }
  p {
    font-size: 1.1rem;
  }
`
const Skills = styled.div`
  background: rgba(33, 131, 222, 0.3);
  /* background: #80b9ed; */

  text-align: left;
  padding: 15px;
  min-width: 40%;
  max-width: 40%;
  margin-left: 20px;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  ul > li {
    border: 1px solid #2d2747;
    border-radius: 2px;
    display: inline-block;
    font-size: 12px;
    margin: 0 7px 7px 0;
    padding: 7px;
  }
  ul > li:hover {
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.3);
  }

  ${mq.small} {
    overflow: auto;
  }
  ${mq.medium} {
    overflow: auto;
  }
`

const Profile = styled.div`
  border-radius: 7px;
  background: rgb(241, 241, 241);
  position: relative;
  width: 100%;
  max-height: 300px;
  /* width: 850px; */
  /* max-width: 100%; */
  text-align: center;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`

export default function Developer({
  dev: {
    status,
    location,
    user: { name, profileUrl, username },
    skills,
  },
}) {
  console.log({
    location,
    name,
    profileUrl,
    skills,
    username,
    status,
  })
  return (
    <Profile>
      <Content>
        <img
          src={
            profileUrl ||
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPMzpx87sl7FshhB2Z_xgx6jT4u2oKTF5vww&usqp=CAU'
          }
          alt="user"
        />
        <h3>
          {name
            .split(' ')
            .map(str => str.charAt(0).toUpperCase() + str.substring(1))
            .join(' ')}
        </h3>
        {location && <h6>{location}</h6>}
      </Content>
      <Bio>
        {status && (
          <p>
            {status
              .split(' ')
              .map(str => str.charAt(0).toUpperCase() + str.substring(1))
              .join(' ')}
          </p>
        )}
        <Link
          to={{
            pathname: `/profile/${username}`,
          }}
        >
          View Profile
        </Link>
      </Bio>
      {skills && skills.length !== 0 && (
        <Skills>
          <h3>SKILLS</h3>
          <ul>
            {skills.map(sk => (
              <li key={sk}>{sk}</li>
            ))}
          </ul>
        </Skills>
      )}
    </Profile>
  )
}
