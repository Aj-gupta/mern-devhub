import {
  CHAT_LIST_FAIL,
  CHAT_LIST_LOADING,
  CHAT_LIST_SUCCESS,
  MESSAGE_LIST_FAIL,
  MESSAGE_LIST_LOADING,
  MESSAGE_LIST_SUCCESS,
} from '../constants/chatConstants'

export const chatListReducer = (state, action) => {
  switch (action.type) {
    case CHAT_LIST_LOADING:
      return { loading: true }
    case CHAT_LIST_SUCCESS:
      return { loading: false, data: action.payload }
    case CHAT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const messageListReducer = (state, action) => {
  switch (action.type) {
    case MESSAGE_LIST_LOADING:
      return { loading: true }
    case MESSAGE_LIST_SUCCESS:
      return { loading: false, data: action.payload }
    case MESSAGE_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
