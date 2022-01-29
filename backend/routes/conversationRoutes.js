import express from 'express'
import {
  getMessages,
  sendMessage,
  getChatList,
  searchUsers,
} from '../controllers/conversationController.js'
import auth from '../utils/authMiddleware.js'

const router = express.Router()

router.get('/', auth, getChatList)
router.get('/search', auth, searchUsers)
router.get('/:username', auth, getMessages)
router.post('/sendMessage', auth, sendMessage)

export default router
