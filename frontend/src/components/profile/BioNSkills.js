import styled from '@emotion/styled/macro'

export const Skills = styled.div`
  padding: 12px 6px;
  margin-top: 30px;
  text-align: center;

  width: 100%;
  h2 {
    text-transform: uppercase;
    padding: 0 7px;
    margin: 18px 0;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    color: #1c1c1c;
  }
  ul > li {
    display: inline-block;
    border: 1px solid #000;
    border-radius: 3px;
    margin: 0 5px 5px;
    padding: 7px;
    font-size: 12px;
    /* border-color: #343434; */
  }

  ul > li:hover {
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.3);
  }
`
const Bio = styled.div`
  padding: 12px 6px;
  margin-top: 30px;
  text-align: center;
  width: 100%;
  h2 {
    text-transform: uppercase;
    padding: 0 7px;
    margin: 18px 0;
  }
`
const BioNSkillsContainer = styled.div`
  margin-top: 1em;
  background: #efefef;
  width: 100%;
  box-shadow: 0 3px 10px rgb(0, 0, 0, 0.2);
`

export default function BioNSkills({ skills, bio }) {
  if (!bio && !skills) {
    return null
  }
  return (
    <BioNSkillsContainer>
      {bio && (
        <Bio>
          <h2>Bio</h2>
          <p>{bio}</p>
        </Bio>
      )}
      {skills && skills.length !== 0 && (
        <Skills>
          <h2>Skills</h2>
          <ul>
            {skills.map(sk => (
              <li key={sk}>{sk}</li>
            ))}
          </ul>
        </Skills>
      )}
    </BioNSkillsContainer>
  )
}
