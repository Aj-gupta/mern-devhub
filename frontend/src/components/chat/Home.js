import styled from '@emotion/styled/macro'
import ChatList from './ChatList'
import Chat from './Chat'

const ChatHomeContainer = styled.div`
  height: 92vh;
  width: 70%;
  margin: 0 auto;
`

export default function ChatHome() {
  return (
    <ChatHomeContainer>
      <ChatList />
      <Chat />
    </ChatHomeContainer>
  )
}
