import styled from '@emotion/styled/macro'
import { useContext } from 'react'
import { ChatContext } from '../../context/ChatContext'
import FullPageSpinner from '../FullPageSpinner'

const Wrapper = styled.div`
  height: 700px;
  width: 350px;
  background: white;
  border-radius: 20px;
  overflow: overlay;

  .home {
    height: 100%;
    display: block;
    padding: 0 2rem;
    position: relative;
    -webkit-animation: fadein 2s;
    /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 2s;
    /* Firefox < 16 */
    -ms-animation: fadein 2s;
    /* Internet Explorer */
    -o-animation: fadein 2s;
    /* Opera < 12.1 */
    animation: fadein 2s;
  }

  .home-screen-tabbar {
    padding: 1rem 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .home-screen-tabbar span {
    color: #868ca0;
    font-size: 16px;
  }

  .home-screen-tabbar span.active {
    color: #000;
    font-size: 20px;
  }

  .home-screen-header {
    display: flex;
    padding-top: 2rem;
    justify-content: space-between;
    align-items: center;
  }
  .home-users {
    height: 100%;
  }
  .home-screen-messages {
    height: 100%;
    margin-top: 20px;
  }
  .message {
    display: flex;
    gap: 1 rem;
    align-items: center;
    margin-bottom: 2 rem;
    cursor: pointer;
    position: relative;
  }
  img {
    height: 60px;
    width: 60px;
    border-radius: 100%;
  }
  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 10px;
  }
  .content-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
  }
  .content-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .content-top h4 {
    margin: 0;
    font-size: 16px;
  }
  .content-top span {
    font-size: 14px;
  }
  .content-bottm h4 {
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    color: #868ca0;
  }

  .content-bottom span {
    font-size: 14px;
    width: 30px;
    text-align: center;
    background: #4753c7;
    color: white;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }
  hr.solid {
    border-top: 3px solid #bbb;
  }
`

function User({
  profileImageUrl = 'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/dbc1dd99666153.5ef7dbf39ecee.jpg',
  name,
  setScreen,
  setUser,
  username,
}) {
  const setUserScreen = screen => {
    setScreen(screen)
    setUser({ name, username })
  }
  return (
    <div
      role="button"
      onKeyPress={() => setUserScreen('Chat')}
      id="message"
      className="message"
      onClick={() => setUserScreen('Chat')}
      tabIndex={0}
    >
      <img src={profileImageUrl} alt="profile" />
      <div className="content">
        <div className="content-top">
          <h4>
            {name
              .split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')}
          </h4>
          <span>Just Now</span>
        </div>
        <div className="content-bottom">
          <h4>Hey! how are you..</h4>
          <span>2</span>
        </div>
      </div>
      <hr className="solid" />
    </div>
  )
}

export default function Home({ setScreen, setUser }) {
  const { chatList } = useContext(ChatContext)
  console.log(chatList)
  if (chatList.loading === true) {
    return <FullPageSpinner />
  }
  return (
    <Wrapper>
      <div className="home">
        <div className="home-header">
          <span id="search-button" className="search-button material-icons">
            search
          </span>
        </div>
        <div className="home-screen-tabbar">
          <span className="active">Chats</span>
        </div>
        <div id="homeScreenMessagesBody" className="home-screen-messages">
          {chatList?.data.length !== 0 &&
            chatList.data.map(user => (
              <User
                name={user.user.name}
                key={user.user.username}
                setScreen={setScreen}
                setUser={setUser}
                username={user.user.username}
              />
            ))}
        </div>
      </div>
    </Wrapper>
  )
}
