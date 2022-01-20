import express from 'express'
import {
  register,
  login,
  getUserInfo,
  logout,
} from '../controllers/userController.js'
import auth from '../utils/authMiddleware.js'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.get('/', auth, getUserInfo)
router.get('/logout', auth, logout)

export default router
