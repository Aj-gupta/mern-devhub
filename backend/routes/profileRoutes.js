import express from 'express'
import {
  getProfile,
  getProfileByUsername,
  updateProfile,
  getProfiles,
  deleteProfileFields,
} from '../controllers/profileController.js'
import auth from '../utils/authMiddleware.js'

const router = express.Router()

router.get('/me', auth, getProfile)
router.put('/me', auth, updateProfile)
router.delete('/me', auth, deleteProfileFields)

router.get('/', getProfiles)
router.get('/:username', getProfileByUsername)

export default router
