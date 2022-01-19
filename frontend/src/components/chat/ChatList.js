import styled from '@emotion/styled'

const ChatListContainer = styled.div`
  display: inline-block;
  /* position: absolute; */
  width: 50%;
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
    margin-left: 1rem;
    font-style: normal;
    font-weight: normal;
    text-transform: capitalize;
    color: #000000;
    opacity: 0.9;
    padding: 0;
  }
  button {
    outline: none;
    border: none;
    background: none;
    margin-top: 1.5em;
    margin-right: 2rem;
    float: right;
    cursor: pointer;
  }
`

const Main = styled.main`
  height: 100vh;
  overflow-y: scroll;
  ul {
    list-style: none;
    padding: 0;
    margin-left: 1em;
  }

  ul > li {
    display: flex;
    margin: 20px 0;
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
    margin-right: 2em;
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
    margin-right: 2em;
    width: 20px;
    height: 20px;
    text-align: center;
    color: #fafafa;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 100px;
  }
`

const ChatUser = () => (
  <li>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIMYmBQyoz9BWjEiMi5XipSPOmhamZUyI1gQ&usqp=CAU"
      alt=""
    />

    <div className="body">
      <div className="top">
        <h3>Ajay</h3>
        <span className="time">10:15</span>
      </div>
      <div className="bottom">
        <span className="message">Must go, talk to you later</span>
        <span className="count">2</span>
      </div>
    </div>
  </li>
)

export default function ChatList() {
  return (
    <ChatListContainer>
      <Header>
        <h1>Chats</h1>
        <button type="button">
          <span className="material-icons">search</span>
        </button>
      </Header>
      <Main>
        <ul>
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
        </ul>
      </Main>
    </ChatListContainer>
  )
}
