import styled from '@emotion/styled/macro'

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
`

export default function SinglePost() {
  return (
    <Post>
      <header>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt=""
        />
        <div>
          <h4>Ajay Gupta</h4>
          <span>an hour ago</span>
        </div>
      </header>
      <p>Hello how are you feeling today</p>
      <div className="buttons">
        <div role="button">
          <span className="material-icons">thumb_up_off_alt</span>
          <button type="button">Like</button>
        </div>
        <div role="button">
          <span className="material-icons">thumb_down_off_alt</span>
          <button type="button">Dislike</button>
        </div>

        <div role="button">
          <span className="material-icons">comment</span>
          <button type="button">Comment</button>
        </div>
      </div>
    </Post>
  )
}
