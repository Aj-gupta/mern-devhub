/* eslint-disable consistent-return */
import styled from '@emotion/styled'
import {
  memo,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from 'react'
import { SocketContext } from '../../context/SocketContext'
import { getMessageList, sendMessage } from '../../redux/actions/chatActions'
import { MESSAGE_LIST_SUCCESS } from '../../redux/constants/chatConstants'
import {
  messageListReducer,
  sendMessageReducer,
} from '../../redux/reducers/chatReducer'

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

  div.last {
    float: left;
    clear: both;
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
  form {
    display: flex;
    right: 0;
    margin: 0 auto;
  }
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

const Reciever = ({ text, time, profileUrl }) => (
  <div key={time} className="right">
    <p>
      {text}
      <br />
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

const Sender = ({ text, time, profileUrl }) => (
  // console.log({ text, time, profileUrl })
  <div key={time} className="left">
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

const SendMessage = memo(({ username, setMessageList }) => {
  const [{ loading, error, data }, dispatch] = useReducer(
    sendMessageReducer,
    {},
  )
  console.log({ loading, data, error })

  const sendMessageHandler = e => {
    e.preventDefault()
    const { message } = e.target.elements
    sendMessage({ text: message.value, username })(dispatch)
    // setNewMessage(true)
  }

  // if (data) {
  //   delete data.status
  //   console.log(data, setMessages)
  //   // setMessages(data)
  // }

  useEffect(() => {
    if (data) {
      console.log('new Message')
      setMessageList(data)
    }
  }, [data])
  return (
    <Footer>
      {loading && <p>loading...</p>}
      {error && <p>Error:{error.message}</p>}
      {(loading !== true || error) && (
        <form onSubmit={sendMessageHandler}>
          <input name="message" />
          <button type="submit">
            <span className="material-icons">send</span>
          </button>
        </form>
      )}
    </Footer>
  )
})

export default function Chat({ user }) {
  const [{ loading, error, data }, setMessageList] = useReducer(
    messageListReducer,
    {
      loading: true,
    },
  )
  const messagesContainerRef = useRef(null)
  const setMessages = useCallback(
    message => {
      const { messages } = data
      messages.push(message)
      setMessageList({ type: MESSAGE_LIST_SUCCESS, payload: data })
    },
    [data, setMessageList],
  )

  const { socket } = useContext(SocketContext)

  // const lastElementRef = useRef()

  useEffect(() => {
    if (data) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight
      // lastElementRef.current.scrollIntoView({ behavior: 'smooth' })
      socket.off('newMessage').on('newMessage', message => {
        console.log('run on new message')
        // setMessages(message)
        // console.log({ data, message })
        setMessages(message)
        // lastElementRef.current.scrollIntoView({ behavior: 'smooth' })
      })
    }
  })
  useEffect(() => {
    if (user === null) return
    getMessageList(user.username)(setMessageList)

    return () => {
      console.log('unmount chat component')
      socket.removeListener('newMessage')
    }
  }, [user])

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
  console.log(loading, error, data)

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
        <Messages ref={messagesContainerRef}>
          {/* {console.log(data.messages)}   */}
          {data?.messages?.map(message => {
            if (message.to === user.username) {
              return (
                <Reciever
                  key={message.time}
                  time={message.time}
                  text={message.text}
                />
              )
            }
            return (
              <Sender
                key={message.time}
                time={message.time}
                text={message.text}
              />
            )
          })}
          {/* <div className="last" ref={lastElementRef} /> */}
        </Messages>
      </main>
      <SendMessage username={user.username} setMessageList={setMessages} />
    </ChatContainer>
  )
}
