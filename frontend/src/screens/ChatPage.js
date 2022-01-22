import ChatHome from '../components/chat/Home'
import { ChatProvider } from '../context/ChatContext'

export default function ChatPage() {
  return (
    <ChatProvider>
      <ChatHome />
    </ChatProvider>
  )
}
