import {
  CHAT_LIST_FAIL,
  CHAT_LIST_LOADING,
  CHAT_LIST_SUCCESS,
  CHAT_SEARCH_FAIL,
  CHAT_SEARCH_LOADING,
  CHAT_SEARCH_SUCCESS,
  MESSAGE_LIST_FAIL,
  MESSAGE_LIST_LOADING,
  MESSAGE_LIST_SUCCESS,
  SEND_MESSAGE_FAIL,
  SEND_MESSAGE_LOADING,
  SEND_MESSAGE_SUCCESS,
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

export const sendMessageReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE_LOADING:
      return { loading: true }
    case SEND_MESSAGE_SUCCESS:
      return { loading: false, data: action.payload }
    case SEND_MESSAGE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const chatSearchReducer = (state, action) => {
  switch (action.type) {
    case CHAT_SEARCH_LOADING:
      return { loading: true }
    case CHAT_SEARCH_SUCCESS:
      return { loading: false, data: action.payload }
    case CHAT_SEARCH_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
