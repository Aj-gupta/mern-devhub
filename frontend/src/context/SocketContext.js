import io from 'socket.io-client'

const { createContext, useLayoutEffect, useState } = require('react')

const SocketContext = createContext()

const socket = io.connect('/')
socket.on('connect', () => {
  console.log('connected to server')
})

SocketContext.displayName = 'SocketContext'

function SocketProvider(props) {
  const [userSocket, setSocket] = useState(socket)

  useLayoutEffect(() => {
    setSocket(socket)
  }, [])
  return (
    <SocketContext.Provider
      value={{
        socket: userSocket,
        setSocket,
      }}
      {...props}
    />
  )
}

export { SocketContext, SocketProvider }
