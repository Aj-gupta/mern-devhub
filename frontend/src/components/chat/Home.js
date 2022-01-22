import styled from '@emotion/styled/macro'
import { useCallback, useContext, useEffect, useState } from 'react'
import ChatList from './ChatList'
import Chat from './Chat'
import { ChatContext } from '../../context/ChatContext'

const ChatHomeContainer = styled.div`
  height: 92vh;
  width: 70%;
  margin: 0 auto;
`

export default function ChatHome() {
  const {
    chatList: { loading, data, error },
  } = useContext(ChatContext)
  const [selectedUser, setSelectedUser] = useState(null)
  console.log(loading, data, error)
  const selectUser = useCallback(
    user => {
      console.log('select user called', user)
      setSelectedUser(user)
    },
    [setSelectedUser],
  )

  useEffect(() => [])
  return (
    <ChatHomeContainer>
      {loading && <div>loading...</div>}
      {error && <div>{error.message}</div>}
      {data && (
        <>
          <ChatList
            data={data}
            selectUser={selectUser}
            selectedUser={selectedUser}
          />
          <Chat user={selectedUser} />
        </>
      )}
    </ChatHomeContainer>
  )
}
