import styled from '@emotion/styled/macro'

const HomeContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`

const InnerContent = styled.div`
  color: #fff;
  /* height: 100%; */
  height: 70%;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  p,
  h1 {
    text-shadow: 0 0 7px #000;
    -moz-text-shadow: 0 0 7px #000;
    -webkit-text-shadow: 0 0 7px #000;
  }

  p {
    font-size: 2rem;
  }

  div {
    position: relative;
    display: flex;
    width: 100%;
    padding: 25px;
    text-align: right;
    justify-content: center;
  }

  div > button {
    color: whitesmoke;
    border: none;
    text-decoration: none;
    font-weight: 700;
    background: #01468f;
    cursor: pointer;
    display: inline-block;
    padding: 0.7rem 1.3rem;
    font-size: 1.5rem;
    cursor: pointer;
    margin-right: 0.5rem;
    outline: none;
    text-align: center;
    border-radius: 20px;
  }
  div > button:hover {
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.55);
  }
  button.light {
    background-color: rgba(122, 180, 235, 1);
    color: black;
  }
`

export default function Home({ toggle }) {
  return (
    <HomeContainer>
      <InnerContent>
        <h1>Developer Hub</h1>
        <p>
          Create a developer portfolio, share posts and get help from other
          developers
        </p>
        <div>
          <button type="button" onClick={() => toggle('register')}>
            Sign Up
          </button>
          <button
            className="light"
            type="button"
            onClick={() => toggle('login')}
          >
            Login
          </button>
        </div>
      </InnerContent>
    </HomeContainer>
  )
}
