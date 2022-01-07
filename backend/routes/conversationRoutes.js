import express from 'express'
import {
  getMessages,
  sendMessage,
  getChatList,
} from '../controllers/conversationController.js'

const router = express.Router()

router.get('/:username', getMessages)
router.post('/sendMessage', sendMessage)
router.get('/', getChatList)

export default router
