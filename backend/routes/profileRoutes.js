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

router
  .route('/me')
  .get(auth, getProfile)
  .put(auth, updateProfile)
  .delete(auth, deleteProfileFields)

router.get('/', getProfiles)
router.get('/:username', getProfileByUsername)

export default router
