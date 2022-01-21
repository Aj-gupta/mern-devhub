import request from '../../utils/request'
import {
  COMMENTS_FAIL,
  COMMENTS_LOADING,
  COMMENTS_SUCCESS,
  CREATE_COMMENT_FAIL,
  CREATE_COMMENT_LOADING,
  CREATE_COMMENT_SUCCESS,
  CREATE_POST_FAIL,
  CREATE_POST_LOADING,
  CREATE_POST_SUCCESS,
  DELETE_COMMENT_FAIL,
  DELETE_COMMENT_LOADING,
  DELETE_COMMENT_SUCCESS,
  DELETE_POST_FAIL,
  DELETE_POST_LOADING,
  DELETE_POST_SUCCESS,
  POSTS_FAIL,
  POSTS_LOADING,
  POSTS_SUCCESS,
  POST_DISLIKE,
  POST_DISLIKE_REMOVE,
  POST_LIKE,
  POST_LIKE_REMOVE,
} from '../constants/postConstants'

export const getPosts = async dispatch => {
  try {
    dispatch({ type: POSTS_LOADING })
    const result = await request.get('/api/posts')
    dispatch({ type: POSTS_SUCCESS, payload: result })
  } catch (err) {
    console.error(err)
    dispatch({ type: POSTS_FAIL, payload: err })
  }
}

export const createPost = data => async dispatch => {
  try {
    dispatch({ type: CREATE_POST_LOADING })
    const result = await request.post('/api/posts', data)
    dispatch({ type: CREATE_POST_SUCCESS, payload: result })
  } catch (err) {
    console.error(err)
    dispatch({ type: CREATE_POST_FAIL, payload: err })
  }
}

export const deletePost = postId => async dispatch => {
  try {
    dispatch({ type: DELETE_POST_LOADING })
    const result = await request.delete(`/api/posts/${postId}`)
    dispatch({ type: DELETE_POST_SUCCESS, payload: result })
  } catch (err) {
    console.error(err)
    dispatch({ type: DELETE_POST_FAIL, payload: err })
  }
}

export const likePost = postId => async dispatch => {
  try {
    const result = await request.put(`/api/posts/like/${postId}`)
    dispatch({ type: POST_LIKE, payload: result })
  } catch (err) {
    console.error(err)
  }
}

export const removePostLike = postId => async dispatch => {
  try {
    const result = await request.delete(`/api/posts/like/${postId}`)
    dispatch({ type: POST_LIKE_REMOVE, payload: result })
  } catch (err) {
    console.error(err)
  }
}

export const dislikePost = postId => async dispatch => {
  try {
    const result = await request.put(`/api/posts/dislike/${postId}`)
    dispatch({ type: POST_DISLIKE, payload: result })
  } catch (err) {
    console.error(err)
  }
}

export const removePostDislike = postId => async dispatch => {
  try {
    const result = await request.delete(`/api/posts/dislike/${postId}`)
    dispatch({ type: POST_DISLIKE_REMOVE, payload: result })
  } catch (err) {
    console.error(err)
  }
}

export const getComments = postId => async dispatch => {
  try {
    dispatch({ type: COMMENTS_LOADING })
    const result = await request.get(`/api/posts/comment/${postId}`)
    dispatch({ type: COMMENTS_SUCCESS, payload: result })
  } catch (err) {
    console.error(err)
    dispatch({ type: COMMENTS_FAIL, payload: err })
  }
}

export const createComment = (postId, data) => async dispatch => {
  try {
    dispatch({ type: CREATE_COMMENT_LOADING })
    const result = await request.post(`/api/posts/comment/${postId}`, data)
    dispatch({ type: CREATE_COMMENT_SUCCESS, payload: result })
  } catch (err) {
    console.error(err)
    dispatch({ type: CREATE_COMMENT_FAIL, payload: err })
  }
}

export const deleteComment = (postId, commentId) => async dispatch => {
  try {
    dispatch({ type: DELETE_COMMENT_LOADING })
    const result = await request.delete(
      `/api/posts/${postId}?commentId=${commentId}`,
    )
    dispatch({ type: DELETE_COMMENT_SUCCESS, payload: result })
  } catch (err) {
    console.error(err)
    dispatch({ type: DELETE_COMMENT_FAIL, payload: err })
  }
}
