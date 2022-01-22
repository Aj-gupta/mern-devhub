import styled from '@emotion/styled'
import { useEffect, useReducer } from 'react'
import { getMessageList } from '../../redux/actions/chatActions'
import { messageListReducer } from '../../redux/reducers/chatReducer'

const ChatContainer = styled.div`
  display: inline-block;
  /* position: absolute; */
  background: #fafafa;
  width: 70%;
  float: right;
  margin: auto 0;
`

const Messages = styled.div`
  height: 80vh;
  overflow-y: scroll;
  div.right,
  div.left {
    display: flex;
    flex-direction: row;
    width: 100%;
    box-align: right;
  }
  div.right {
    align-items: flex-end;
    justify-content: flex-end;
  }
  div.left {
    align-items: flex-start;
    justify-content: flex-start;
  }
  div.right > img,
  div.left > img {
    width: 22px;
    height: 22px;
    border-radius: 50%;
  }

  div.left > img {
    display: inline-block;
    margin-top: auto;
    margin-bottom: 0;
  }

  div.right > p,
  div.left > p {
    min-width: 259px;
    min-height: 62px;
    padding: 10px;
    text-align: center;
    background: white;
    border-radius: 10px;
  }
`
const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-left: 1em;
  position: sticky;
  background: #fafafa;
  top: 60px;
  /* width: 100%; */
  padding: 0;
  /* z-index: 1; */
  height: 10vh;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    align-self: center;
  }
  div.user {
    margin: 1em;
  }
  div.user > h4 {
    /* display: inline-block; */
    font-style: normal;
    font-weight: bold;
    opacity: 0.9;
    margin: 0;
  }
  div.user > span {
    opacity: 0.5;
  }
`

const Footer = styled.footer`
  position: sticky;
  bottom: 0.5em;
  width: 100%;
  height: 8vh;
  left: 0;
  display: flex;
  right: 0;
  margin: 0 auto;
  input {
    width: 100%;
    position: relative;
    padding: 0.8rem;
    border-radius: 1rem;
    border: none;
    background: #fafafa;
    border: 2px solid blue;
  }
  input:hover {
    box-shadow: 0 0 11px rgba(0, 0, 0, 1);
  }
  button {
    margin-left: 5px;
    margin-top: auto;
    margin-bottom: auto;
    height: 36px;
    width: 36px;
    border-radius: 50px;
    border: none;
    background: blue;
    color: white;
    cursor: pointer;
  }
  .material-icons {
    color: white;
  }
  button:hover {
    box-shadow: 0 0 11px rgba(0, 0, 0, 0.8);
  }
`

const Reciever = ({ text, key, profileUrl }) => (
  <div key={key} className="right">
    <p>
      {text}
      <br />
      1130
    </p>
    <img
      src={
        profileUrl ??
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
      }
      alt=""
    />
  </div>
)

const Sender = ({ text, key, profileUrl }) => (
  <div key={key} className="left">
    <img
      src={
        profileUrl ??
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
      }
      alt=""
    />
    <p>{text}</p>
  </div>
)

export default function Chat({ user }) {
  const [{ loading, error, data }, setMessageList] = useReducer(
    messageListReducer,
    {
      loading: true,
    },
  )
  useEffect(() => {
    if (user === null) return
    getMessageList(user.username)(setMessageList)
  }, [user])
  console.log(loading, error, data)
  if (user === null) {
    return (
      <ChatContainer>
        <h3>Select a user to see chats</h3>
      </ChatContainer>
    )
  }

  if (loading) {
    return <div>loading...</div>
  }
  if (error) {
    return <div>Error:{error.message}</div>
  }

  return (
    <ChatContainer>
      <Header>
        {/* <span className="material-icons">chevron_left</span> */}
        <img
          src={
            user.profileUrl ||
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
          }
          alt=""
        />
        <div className="user">
          <h4>
            {user.name
              .split(' ')
              .map(str => str.charAt(0).toUpperCase() + str.substring(1))
              .join(' ')}
          </h4>
          <span>last seen 2 hours ago</span>
        </div>
      </Header>

      <main>
        <Messages>
          {data.messages.map(message => {
            if (message.to === user.username) {
              return <Reciever key={message._id} text={message.text} />
            }
            return <Sender key={message._id} text={message.text} />
          })}
        </Messages>

        <div className="send-message" />
      </main>
      <Footer>
        <input />
        <button type="submit">
          <span className="material-icons">send</span>
        </button>
      </Footer>
    </ChatContainer>
  )
}
