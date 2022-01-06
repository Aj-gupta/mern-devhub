import dotenv from 'dotenv'
import express from 'express'
import http from 'http'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const app = express()
const server = http.createServer(app)

server.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
