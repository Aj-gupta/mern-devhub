import styled from '@emotion/styled'
import { useEffect, useReducer } from 'react'
import { searchChatList } from '../../redux/actions/chatActions'
import { CHAT_LIST_SUCCESS } from '../../redux/constants/chatConstants'
import { chatSearchReducer } from '../../redux/reducers/chatReducer'
// import { useState } from 'react'

const ChatListContainer = styled.div`
  display: inline-block;
  /* position: absolute; */
  width: 30%;
  height: 100%;
  float: left;
  /* margin: auto 0; */
  display: flex;
  flex-direction: column;
  background: #fafafa;
`

const Header = styled.header`
  position: sticky;
  top: 60px;
  background: #fafafa;
  h1 {
    display: inline-block;
    margin-top: 0.2em;
    text-align:center;
    width:100%;
    font-style: normal;
    font-weight: normal;
    text-transform: capitalize;
    color: #000000;
    opacity: 0.9;
    padding: 0;
  }

  div {
    display: flex;
    align-items:center;
    /* margin-left:1em; */
    height:1.7em;
    margin:0 auto;
    width:80% ;
  }
  div > span {
    position: absolute;
    right:1.4em;
  }
  div > input {
    width:100%;
    height:100%;
    margin:0;
    padding:0;
    border-radius: 40px;
    border:1px solid black;
    text-align:center;
  }
  /* button {
    display: flex;

    outline: none;
    border: none;
    background: none;
    margin-top: 1.5em;
    margin-right: 2rem;
    float: right;
    cursor: pointer;
    /* border-radius: 40px; */
  } */
`

const Main = styled.main`
  height: 100vh;
  overflow-y: scroll;
  ul {
    list-style: none;
    padding: 0;
    /* margin-left: 1em; */
  }

  ul > li {
    display: flex;
    /* padding-top: 10px; */
    /* padding-bottom: 10px; */
    padding: 10px;
    margin: 0 1em;
    cursor: pointer;
    border-radius: 13px;
  }
  ul > li:hover {
    background: rgba(212, 212, 217, 0.3019607843);
  }
  ul > li[current='true'] {
    background: #e8f3ff;
  }
  li > img {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    align-self: center;
  }

  li > div.body {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  li > div.body > div.top > h3 {
    font-style: normal;
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
  }
  li > div.body > div.top > span.time {
    /* display: inline; */
    float: right;
    /* margin-right: 2em; */
  }
  li > div.body {
    margin-left: 1.5em;
    padding: 0;
  }
  li > div.body > div.bottom > span.message {
    display: inline-block;
    margin-top: 0;
    opacity: 0.5;
  }
  li > div.body > div.bottom > span.count {
    float: right;
    /* margin-right: 2em; */
    width: 20px;
    height: 20px;
    text-align: center;
    color: #fafafa;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 100px;
  }
`

const ChatUser = ({ user, selectUser, selectedUser }) => {
  console.log(selectedUser)
  return (
    <li current={selectedUser?.username === user.username ? 'true' : 'false'}>
      <img
        src={
          user?.profileUrl ||
          'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
        }
        alt=""
      />

      <div
        className="body"
        role="button"
        onClick={() => selectUser(user)}
        onKeyPress={e =>
          e.key === 'Enter' ? () => selectUser(user) : () => {}
        }
        tabIndex={-1}
      >
        <div className="top">
          <h3>
            {/* {console.log(user)} */}
            {user &&
              user.name &&
              user?.name
                .split(' ')
                .map(d => d.charAt(0).toUpperCase() + d.substring(1))
                .join(' ')}
          </h3>
          <span className="time">10:15</span>
        </div>
        <div className="bottom">
          <span className="message">Must go, talk to</span>
          <span className="count">2</span>
        </div>
      </div>
    </li>
  )
}
export default function ChatList({
  data,
  selectUser,
  selectedUser,
  setChatList,
}) {
  const [{ loading, data: users, error }, dispatch] = useReducer(
    chatSearchReducer,
    {},
  )
  console.log(loading, users, error)
  let timer
  const onKeyUpHandler = e => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      const search = e.target.value
      console.log(search)
      searchChatList(search)(dispatch)
    }, 1000)
  }

  const onKeyDownHandler = () => {
    clearTimeout(timer)
  }

  useEffect(() => {
    if (users) {
      const payload = data.filter(ele => !users.users.includes(ele))
      console.log(payload)
      setChatList({
        type: CHAT_LIST_SUCCESS,
        payload: [...users.users, ...payload],
      })
    }
  }, [loading])
  return (
    <ChatListContainer>
      <Header>
        <h1>Chats</h1>
        <div>
          <input
            type="text"
            name="search"
            placeholder="Search Users"
            onKeyUp={onKeyUpHandler}
            onKeyDown={onKeyDownHandler}
          />
          <span className="material-icons">search</span>
          {loading && <p>loading...</p>}
          {error && <p>error</p>}
        </div>
      </Header>
      <Main>
        <ul>
          {!loading &&
            data &&
            data.length !== 0 &&
            data.map(conversation => (
              <ChatUser
                key={conversation._id}
                user={{
                  username: conversation.username,
                  name: conversation.name,
                }}
                selectUser={selectUser}
                selectedUser={selectedUser}
              />
            ))}
        </ul>
      </Main>
    </ChatListContainer>
  )
}
