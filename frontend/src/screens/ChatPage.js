import { useContext, useEffect } from 'react'
import ChatHome from '../components/chat/Home'
import { AuthContext } from '../context/AuthContext'
import { ChatProvider } from '../context/ChatContext'
import { SocketContext, SocketProvider } from '../context/SocketContext'

function Chat() {
  const { user } = useContext(AuthContext)
  const { socket } = useContext(SocketContext)
  useEffect(() => {
    if (user) {
      socket.emit('join', user.username)
    }
  }, [])
  return (
    <ChatProvider>
      <ChatHome />
    </ChatProvider>
  )
}

export default function ChatPage() {
  return (
    <SocketProvider>
      <Chat />
    </SocketProvider>
  )
}
