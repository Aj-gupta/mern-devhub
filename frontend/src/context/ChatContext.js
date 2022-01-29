import { getChatList } from '../redux/actions/chatActions'
import { chatListReducer } from '../redux/reducers/chatReducer'

const { createContext, useReducer, useEffect } = require('react')

const ChatContext = createContext()

ChatContext.displayName = 'ChatContext'

function ChatProvider(props) {
  const [chatList, setChatList] = useReducer(chatListReducer, {
    loading: true,
  })

  useEffect(() => {
    getChatList(setChatList)
  }, [setChatList])
  return (
    <ChatContext.Provider
      value={{
        chatList,
        setChatList,
      }}
      {...props}
    />
  )
}

export { ChatContext, ChatProvider }
