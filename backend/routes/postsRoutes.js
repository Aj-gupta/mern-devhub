import express from 'express'
import {
  createPost,
  getPosts,
  deletePost,
  likePost,
  removePostLike,
  dislikePost,
  removePostDislike,
  getComments,
  createComment,
  deleteComment,
} from '../controllers/postController.js'
import auth from '../utils/authMiddleware.js'

const router = express.Router()

router.route('/').get(auth, getPosts).post(auth, createPost)

router.delete('/:postId', auth, deletePost)

router
  .route('/like/:postId')
  .put(auth, likePost)
  .delete(auth, removePostLike)

router
  .route('/dislike/:postId')
  .put(auth, dislikePost)
  .delete(auth, removePostDislike)

router
  .route('/comment/:postId')
  .get(auth, getComments)
  .post(auth, createComment)
  .delete(auth, deleteComment)

export default router
