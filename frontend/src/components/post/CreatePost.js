import styled from '@emotion/styled'

const Post = styled.section`
  width: 100%;
  border-radius: 0.375em;
  background: #fff;
  display: flex;
  flex-direction: column;
  header {
    border-bottom: 2px solid #fafafa;
  }

  header > h2 {
    font-style: inherit;
    font-weight: normal;
    margin-left: 0.5em;
    margin-top: 0;
    margin-bottom: 0;

    padding: 0.5em;
  }
  div.user {
    display: flex;
    align-content: center;
    align-items: center;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
  main > div.user > h3 {
    font-style: inherit;
    font-weight: 400;
    margin-left: 1em;
  }

  main > div.user > img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-left: 1em;
    /* height: 28px; */
  }

  main > textarea {
    display: block;
    font-family: inherit;
    width: 100%;
    padding: 1em;
    font-size: inherit;
    resize: none;
    letter-spacing: inherit;
    /* border: none; */
    background: #fafafa;
    height: 10vh;
  }

  footer > button {
    float: right;
    padding: 0.5em;
    margin: 1em;
    outline: none;
    background: blue;
    color: whitesmoke;
    border: none;
    border-radius: 7px;
    cursor: pointer;
  }

  foter > button:hover {
    border-width: 2px;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.6);
  }
`

export default function CreatePost() {
  return (
    <Post>
      <header>
        <h2>Create a Post</h2>
      </header>
      <main>
        <div className="user">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt=""
          />
          <h3>Ajay Kumar Gupta</h3>
        </div>
        <textarea placeholder="What's on your mind?" />
      </main>
      <footer>
        <button type="button">Post</button>
      </footer>
    </Post>
  )
}
