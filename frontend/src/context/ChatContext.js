import { useCallback } from 'react'
import { getChatList, getMessageList } from '../redux/actions/chatActions'
import {
  chatListReducer,
  messageListReducer,
} from '../redux/reducers/chatReducer'

const { createContext, useReducer, useEffect } = require('react')

const ChatContext = createContext()

ChatContext.displayName = 'ChatContext'

function ChatProvider(props) {
  const [chatList, setChatList] = useReducer(chatListReducer, {
    loading: true,
  })

  const [messageList, setMessageList] = useReducer(messageListReducer, {
    loading: true,
  })

  const setMessages = useCallback(
    username => {
      getMessageList(username)(setMessageList)
    },
    [setMessageList],
  )

  useEffect(() => {
    getChatList(setChatList)
  }, [setChatList])
  return (
    <ChatContext.Provider
      value={{
        chatList,
        messageList,
        setMessages,
      }}
      {...props}
    />
  )
}

export { ChatContext, ChatProvider }
