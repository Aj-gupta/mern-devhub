import styled from '@emotion/styled/macro'
import { useContext, useEffect, useReducer } from 'react'
import { AuthContext } from '../../context/AuthContext'
import {
  dislikePost,
  likePost,
  removePostDislike,
  removePostLike,
} from '../../redux/actions/postActions'
import { POST_DISLIKE, POST_LIKE } from '../../redux/constants/postConstants'
import { postLikeDisklikeReducer } from '../../redux/reducers/postReducer'

const Post = styled.section`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #fafafa;
  border-bottom: 1px solid #fafafa;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
  /* border-top-radius: 50%; */
  /* border-color: grey; */
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  width: 100%;
  background-color: #ffffff;
  margin-top: 1em;
  /*  
        post content in paragraph
      */
  p {
    display: inline-block;
    word-wrap: break-word;
    font-weight: 400;
    /* margin: 10px; */
    margin-left: 2em;
  }

  /* 
        post header which includes profile pic name and status
      */
  header {
    display: flex;
    padding: 1em 0 0.5em 1em;
    /* margin-top: 15px; */
    /* margin-left: 15px; */
    border-bottom: 3px solid #fafafa;
  }
  /* 
        header div includes name & status
      */
  header > div {
    margin-left: 15px;
  }

  /* 
        header -> name
      */

  header > div > h4 {
    margin-top: 3px;
    margin-bottom: 4px;
  }

  /* 
        header -> status
      */
  header > div > span {
    color: #92959e;
    font-weight: bold;
    font-size: 13px;
  }

  /* 
        header -> profle-pic
      */
  header > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  /* 
        post like dislike & comment button
      */
  div.buttons {
    border-top: 3px solid #fafafa;
    /* margin: 0px 15px 0px 15px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }
  /* 
        buttons styles
  */
  div[role='button'] {
    margin: 5px;
    display: flex;
    cursor: pointer;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  div[role='button'] > button {
    /* for removing regular button styles */
    display: inline;
    background: none;
    align-self: center;
    align-items: center;
    align-content: center;
    /* background-color: blue; */
    /* color: inherit; */
    border: none;
    padding: 0.5em;
    font: inherit;
    cursor: pointer;
    /* outline: inherit; */
  }
  /* 
        button image
      */
  button > span {
    margin-left: 0;
  }
  div[role='button']:hover {
    /* background-color: blue; */
    border-radius: 9px;
    background: #fafafa;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  }
  div.buttons > div[liked='false'] > span:after {
    content: 'thumb_up_off_alt';
  }
  div.buttons > div[disliked='false'] > span:after {
    content: 'thumb_down_off_alt';
  }
  div.buttons > div[liked='true'] > span:after {
    content: 'thumb_up';
    color: #2183de;
  }
  div.buttons > div[disliked='true'] > span:after {
    content: 'thumb_down';
    color: #2183de;
  }
`

export default function SinglePost({ post }) {
  // console.log(post)
  const {
    user: { userId },
  } = useContext(AuthContext)
  const [{ liked, disliked }, dispatch] = useReducer(
    postLikeDisklikeReducer,
    {},
  )

  const Like = () => {
    if (disliked) {
      removePostDislike(post._id)(dispatch)
    }
    likePost(post._id)(dispatch)
  }

  const Dislike = () => {
    if (liked) {
      removePostLike(post._id)(dispatch)
    }
    dislikePost(post._id)(dispatch)
  }

  const RemoveLike = () => {
    removePostLike(post._id)(dispatch)
  }

  const RemoveDislike = () => {
    removePostDislike(post._id)(dispatch)
  }

  useEffect(() => {
    if (post?.likes?.includes(userId)) {
      dispatch({ type: POST_LIKE })
    }
    if (post?.dislikes?.includes(userId)) {
      dispatch({ type: POST_DISLIKE })
    }
  }, [])
  return (
    <Post>
      <header>
        <img
          src={
            post?.user?.profileUrl
              ? post.user.profileUrl
              : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
          }
          alt=""
        />
        <div>
          <h4>{post.user.name}</h4>
          <span>{new Date(post.date).toLocaleString('en-IN')}</span>
        </div>
      </header>
      <p>{post.text}</p>
      <div className="buttons">
        <div
          role="button"
          liked={liked ? 'true' : 'false'}
          onClick={liked ? RemoveLike : Like}
          onKeyPress={liked ? RemoveLike : Like}
          tabIndex="-1"
        >
          <span className="material-icons" />
          <button type="button">Like</button>
        </div>
        <div
          role="button"
          disliked={disliked ? 'true' : 'false'}
          onClick={disliked ? RemoveDislike : Dislike}
          onKeyPress={disliked ? RemoveDislike : Dislike}
          tabIndex={-2}
        >
          <span className="material-icons" />
          <button type="button">Dislike</button>
        </div>

        <div role="button" tabIndex={-2}>
          <span className="material-icons">comment</span>
          <button type="button">Comment</button>
        </div>
      </div>
    </Post>
  )
}
