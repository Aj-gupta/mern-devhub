import styled from '@emotion/styled/macro'

const Content = styled.div`
  margin: 10px;
  min-width: 150px;
  img {
    border: 1px solid #03bfcb;
    border-radius: 50%;
    padding: 7px;
    width: 60%;
  }
`
const Bio = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  button {
    background: #0b607f;
    border: 1px solid #03bfcb;
    color: white;
    border-radius: 3px;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    padding: 10px 25px;
  }
  p {
    font-size: 1.1rem;
  }
`
const Skills = styled.div`
  background: rgb(207, 227, 227);
  text-align: left;
  padding: 15px;
  max-width: 350px;
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
`

const Profile = styled.div`
  border-radius: 7px;
  background: rgb(241, 241, 241);
  position: relative;
  width: 850px;
  max-width: 100%;
  text-align: center;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h3 {
    margin: 10px 0;
  }

  h6 {
    margin: 5px 0;
    text-transform: uppercase;
  }
`

export default function Developers() {
  return (
    <Container>
      <Profile>
        <Content>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPMzpx87sl7FshhB2Z_xgx6jT4u2oKTF5vww&usqp=CAU"
            alt="user"
          />
          <h3>Ricky Park</h3>
          <h6>New York</h6>
        </Content>
        <Bio>
          <p>User interface designer and front-end developer</p>
          <button type="button">View Profile</button>
        </Bio>
        <Skills>
          <h3>SKILLS</h3>
          <ul>
            <li>UI / UX</li>
            <li>Front End Development</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node</li>
          </ul>
        </Skills>
      </Profile>
      <Profile>
        <Content>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPMzpx87sl7FshhB2Z_xgx6jT4u2oKTF5vww&usqp=CAU"
            alt="user"
          />
          <h3>Ricky Park</h3>
          <h6>New York</h6>
        </Content>
        <Bio>
          <p>User interface designer and front-end developer</p>
          <button type="button">View Profile</button>
        </Bio>
        <Skills>
          <h3>SKILLS</h3>
          <ul>
            <li>UI / UX</li>
            <li>Front End Development</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node</li>
          </ul>
        </Skills>
      </Profile>
      <Profile>
        <Content>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPMzpx87sl7FshhB2Z_xgx6jT4u2oKTF5vww&usqp=CAU"
            alt="user"
          />
          <h3>Ricky Park</h3>
          <h6>New York</h6>
        </Content>
        <Bio>
          <p>User interface designer and front-end developer</p>
          <button type="button">View Profile</button>
        </Bio>
        <Skills>
          <h3>SKILLS</h3>
          <ul>
            <li>UI / UX</li>
            <li>Front End Development</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node</li>
          </ul>
        </Skills>
      </Profile>
      <Profile>
        <Content>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPMzpx87sl7FshhB2Z_xgx6jT4u2oKTF5vww&usqp=CAU"
            alt="user"
          />
          <h3>Ricky Park</h3>
          <h6>New York</h6>
        </Content>
        <Bio>
          <p>User interface designer and front-end developer</p>
          <button type="button">View Profile</button>
        </Bio>
        <Skills>
          <h3>SKILLS</h3>
          <ul>
            <li>UI / UX</li>
            <li>Front End Development</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node</li>
          </ul>
        </Skills>
      </Profile>
    </Container>
  )
}
