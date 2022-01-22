import styled from '@emotion/styled'
import { useContext, useEffect, useReducer } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { createPost } from '../../redux/actions/postActions'
import { createPostReducer } from '../../redux/reducers/postReducer'

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
  form > div.user > h3 {
    font-style: inherit;
    font-weight: 400;
    margin-left: 1em;
  }

  form > div.user > img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-left: 1em;
    /* height: 28px; */
  }

  form > textarea {
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

  form > button {
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
  const { user } = useContext(AuthContext)
  const [{ loading, error, post }, dispatch] = useReducer(createPostReducer, {})
  // console.log(loading, error, post)

  const onCreatePost = e => {
    e.preventDefault()
    const { text } = e.target.elements
    createPost({ text: text.value })(dispatch)
  }
  useEffect(() => {}, [loading, error, post])
  return (
    <Post>
      {loading && <div>loading...</div>}
      {error && <div>Error {error.message}</div>}
      {post && <div>Success</div>}
      <header>
        <h2>Create a Post</h2>
      </header>
      <form onSubmit={onCreatePost}>
        <div className="user">
          <img
            src={
              user && user.profileUrl
                ? user.profileUrl
                : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
            }
            alt=""
          />
          <h3>
            {user &&
              user.name
                .split(' ')
                .map(str => str.charAt(0).toUpperCase() + str.substring(1))
                .join(' ')}
          </h3>
        </div>
        <textarea placeholder="What's on your mind?" name="text" />
        <button type="submit">Post</button>
      </form>
    </Post>
  )
}
