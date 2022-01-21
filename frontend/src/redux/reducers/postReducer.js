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

export const getPostsReducer = (state, action) => {
  switch (action.type) {
    case POSTS_LOADING:
      return { loading: true }
    case POSTS_SUCCESS:
      return { loading: false, user: action.payload }
    case POSTS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const createPostReducer = (state, action) => {
  switch (action.type) {
    case CREATE_POST_LOADING:
      return { loading: true }
    case CREATE_POST_SUCCESS:
      return { loading: false, user: action.payload }
    case CREATE_POST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const deletePostReducer = (state, action) => {
  switch (action.type) {
    case DELETE_POST_LOADING:
      return { loading: true }
    case DELETE_POST_SUCCESS:
      return { loading: false, user: action.payload }
    case DELETE_POST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const postLikeDisklikeReducer = (state, action) => {
  switch (action.type) {
    case POST_LIKE:
      return { liked: true, data: action.payload }
    case POST_LIKE_REMOVE:
      return { removedLike: true, data: action.payload }
    case POST_DISLIKE:
      return { disliked: true }
    case POST_DISLIKE_REMOVE:
      return { removedDislike: true }
    default:
      return state
  }
}

export const getCommentsReducer = (state, action) => {
  switch (action.type) {
    case COMMENTS_LOADING:
      return { loading: true }
    case COMMENTS_SUCCESS:
      return { loading: false, data: action.payload }
    case COMMENTS_FAIL:
      return { loading: false, data: action.payload }
    default:
      return state
  }
}

export const createCommentReducer = (state, action) => {
  switch (action.type) {
    case CREATE_COMMENT_LOADING:
      return { loading: true }
    case CREATE_COMMENT_SUCCESS:
      return { loading: false, data: action.payload }
    case CREATE_COMMENT_FAIL:
      return { loading: false, data: action.payload }
    default:
      return state
  }
}

export const deleteCommentReducer = (state, action) => {
  switch (action.type) {
    case DELETE_COMMENT_LOADING:
      return { loading: true }
    case DELETE_COMMENT_SUCCESS:
      return { loading: false, data: action.payload }
    case DELETE_COMMENT_FAIL:
      return { loading: false, data: action.payload }
    default:
      return state
  }
}
