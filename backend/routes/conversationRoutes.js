import express from 'express'
import {
  getMessages,
  sendMessage,
  getChatList,
} from '../controllers/conversationController.js'
import auth from '../utils/authMiddleware.js'

const router = express.Router()

router.get('/:username', auth, getMessages)
router.post('/sendMessage', auth, sendMessage)
router.get('/', auth, getChatList)

export default router
