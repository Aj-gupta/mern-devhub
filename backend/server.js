import dotenv from 'dotenv'
import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

import connectDB from './config/db.js'
import { addUser, removeUser } from './utils/users.js'

import userRoutes from './routes/userRoutes.js'
import conversationRoutes from './routes/conversationRoutes.js'
import profileRoutes from './routes/profileRoutes.js'
import notFound from './utils/notFoundHandler.js'

dotenv.config()

connectDB()

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})
app.use(express.json())
app.use(cookieParser())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use((req, res, next) => {
  req.io = io
  next()
})

app.use('/api/user', userRoutes)
app.use('/api/conversations', conversationRoutes)
app.use('/api/profile', profileRoutes)

app.use(notFound)

const PORT = process.env.PORT || 5000

io.on('connection', (socket) => {
  let Username = ''
  console.log('a user connected')
  socket.on('join', (username) => {
    Username = username
    console.log('joining user', username)
    socket.join(username)
    addUser(username)
  })

  socket.on('disconnect', () => {
    removeUser(Username)
    console.log('user disconnected')
  })
})

server.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
