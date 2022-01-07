import styled from '@emotion/styled/macro'
import { useContext, useEffect } from 'react'
import { ChatContext } from '../../context/ChatContext'
import FullPageSpinner from '../FullPageSpinner'

const Wrapper = styled.div`
  height: 100%;
  width: 350px;
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

  .header {
    position: sticky;
    display: flex;
    padding-top: 2rem;
    justify-content: space-between;
    align-items: center;
    position: -webkit-sticky;
    /* width: 100%; */
    top: 0;
    background: white;
  }
  .header .left {
    display: flex;
    align-items: center;
  }
  .header .left .username {
    margin-left: 10px;
  }
  .header .left .username h4 {
    margin: 0;
    margin-bottom: 0.2rem;
  }

  .header .left .username span {
    position: relative;
    font-size: 12px;
    justify-content: start !important;
    width: 75px !important;
    margin: 0 !important;
    height: auto !important;
    color: #868ca0;
  }
  .header .left .username span::after {
    position: absolute;
    content: '';
    right: 0;
    top: 0;
    height: 8px;
    width: 8px;
    border-radius: 100px;
    background: #08b827;
  }

  .header span {
    height: 40 px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 100%; */
    width: 40 px;
    cursor: pointer;
    transition: 0.25s all;
  }

  .body {
    padding: 2rem 0;
  }

  .body .message-sender {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .body .message-sender img {
    height: 40px;
    width: 40px;
    align-self: flex-end;
    border-radius: 100px;
  }

  .body .message-sender .content .message {
    font-size: 14px;
    padding: 1rem;
    background: #f9f9f9;
    border-radius: 0 10px 10px 10px;
  }

  .body .message-sender .content .time {
    margin-top: 0.5rem;
    font-size: 10px;
    color: #acacac;
  }

  .body .message-reciever {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  .body .message-reciever img {
    height: 40px;
    width: 40px;
    align-self: flex-end;
    border-radius: 100px;
  }
  .body .message-reciever .content {
    display: flex;
    flex-direction: column;
  }
  .body .message-reciever .content .message {
    font-size: 14px;
    padding: 1rem;
    background: #f9f9f9;
    border-radius: 0 10px 10px 10px;
  }
  .body .message-reciever .content .time {
    margin-top: 0.5rem;
    font-size: 10px;
    color: #acacac;
    text-align: right;
  }

  .footer {
    position: sticky;
    bottom: 4px;
    width: 100%;
    /* width: 100%; */
    left: 0;
    /* padding: 0; */
    right: 0;
    margin: 0 auto;
  }
  .footer .send-message {
    display: flex;
    align-items: center;
  }
  .footer .send-message input {
    width: 100%;
    position: relative;
    padding: 0.8rem;
    border-radius: 1rem;
    border: none;
    background: #f4f4f4;
  }
  .footer .send-message input:hover {
    box-shadow: 0 0 11px rgba(11, 127, 171, 1);
  }
  .footer .send-message button {
    position: absolute;
    right: 5px;
    /* padding: 8px; */
    /* top: 8px; */
    height: 30px;
    /* bottom: 5px; */
    width: 30px;
    border-radius: 100px;
    border: none;
    background: #4753c7;
    color: white;
    cursor: pointer;
  }
`
// const SenderMessage = styled.div`
//   border: 2px solid #dedede;
//   border-color: #ccc;
//   background-color: #ddd;
//   border-radius: 5px;
//   padding: 10px;
//   margin: 10px 0;
//   width: 100%;
//   ::after {
//     content: '';
//     clear: both;
//     display: table;
//   }
//   img {
//     max-width: 60px;
//     width: 100%;
//     float: right;
//     margin-left: 20px;
//     margin-right: 0;
//     border-radius: 50%;
//   }
//   span {
//     float: left;
//     color: #999;
//   }
// `

// const RecieverMessage = styled.div`
//   border: 2px solid #dedede;
//   background-color: #f1f1f1;
//   border-radius: 5px;
//   padding: 10px;
//   margin: 10px 0;
//   width: 100%;
//   ::after {
//     content: '';
//     clear: both;
//     display: table;
//   }
//   img {
//     float: left;
//     max-width: 60px;
//     width: 100%;
//     margin-right: 20px;
//     border-radius: 50%;
//   }
//   span {
//     float: right;
//     color: #aaa;
//   }
// `

const Sender = ({ message }) => (
  <div className="message-sender">
    <img
      src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/dbc1dd99666153.5ef7dbf39ecee.jpg"
      alt="profile"
    />
    <div className="content">
      <div className="message">{message.text}</div>
      <span className="time">
        {new Date(Number(message.time)).toLocaleTimeString('en-IN')}
      </span>
    </div>
  </div>
  // <SenderMessage>
  //   <img
  //     src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/dbc1dd99666153.5ef7dbf39ecee.jpg"
  //     alt="Avatar"
  //   />
  //   <p>{message.text}</p>
  //   <span>{new Date(Number(message.time)).toLocaleTimeString('en-IN')}</span>
  // </SenderMessage>
)

const Reciever = ({ message }) => (
  <div className="message-reciever">
    <div className="content">
      <span className="message">{message.text}</span>
      <span className="time">
        {new Date(Number(message.time)).toLocaleTimeString('en-IN')}
      </span>
    </div>
    <img
      src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/dbc1dd99666153.5ef7dbf39ecee.jpg"
      alt="profile"
    />
  </div>
  // <RecieverMessage>
  //   <img
  //     src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/dbc1dd99666153.5ef7dbf39ecee.jpg"
  //     alt="Avatar"
  //     className="right"
  //   />
  //   <p>{message.text}</p>
  //   <span>{new Date(Number(message.time)).toLocaleTimeString('en-IN')}</span>
  // </RecieverMessage>
)

export default function Chat({ setScreen, user }) {
  const { messageList, setMessages } = useContext(ChatContext)

  useEffect(() => {
    setMessages(user.username)
  }, [setMessages])

  if (messageList.loading === true) {
    return <FullPageSpinner />
  }

  console.log(messageList.data)
  return (
    <Wrapper>
      <div className="header">
        <div className="left">
          <span
            role="button"
            onClick={() => setScreen('ChatHome')}
            onKeyPress={() => setScreen('ChatHome')}
            tabIndex={0}
          >
            ←
          </span>
          <div className="username">
            <h4>{user.name}</h4>
            <span>Active Now</span>
          </div>
        </div>
        <span className="material-icons">more_horiz</span>
      </div>
      <div className="body">
        {messageList.data.messages.map(message => {
          if (message.to === user.username) {
            return <Sender message={message} key={message.time} />
          }
          return <Reciever message={message} key={message.time} />
        })}
        {/* <div className="message-sender">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/dbc1dd99666153.5ef7dbf39ecee.jpg"
            alt="profile"
          />
          <div className="content">
            <div className="message">
              hey man, this is some message to test.😅
            </div>
            <span className="time">00.12</span>
          </div>
        </div>
        <div className="message-reciever">
          <div className="content">
            <span className="message">
              hey man, this is some message to test.😅{' '}
            </span>
            <span className="time">00:12</span>
          </div>
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/dbc1dd99666153.5ef7dbf39ecee.jpg"
            alt="profile"
          />
        </div>
        <div className="message-sender">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/dbc1dd99666153.5ef7dbf39ecee.jpg"
            alt="profile"
          />
          <div className="content">
            <div className="message">
              hey man, this is some message to test.😅
            </div>
            <span className="time">00.12</span>
          </div>
        </div>
        <div className="message-reciever">
          <div className="content">
            <span className="message">
              hey man, this is some message to test.😅{' '}
            </span>
            <span className="time">00:12</span>
          </div>
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/dbc1dd99666153.5ef7dbf39ecee.jpg"
            alt="profile"
          />
        </div>
        <div className="message-sender">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/dbc1dd99666153.5ef7dbf39ecee.jpg"
            alt="profile"
          />
          <div className="content">
            <div className="message">
              hey man, this is some message to test.😅
            </div>
            <span className="time">00.12</span>
          </div>
        </div>
        <div className="message-reciever">
          <div className="content">
            <span className="message">
              hey man, this is some message to test.😅{' '}
            </span>
            <span className="time">00:12</span>
          </div>
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/dbc1dd99666153.5ef7dbf39ecee.jpg"
            alt="profile"
          />
        </div> */}
      </div>
      <div className="footer">
        <div className="send-message">
          <input
            id="message-input"
            placeholder="Type new message"
            type="text"
          />
          <button type="submit">
            <span className="material-icons">send</span>
          </button>
        </div>
      </div>
    </Wrapper>
  )
}
