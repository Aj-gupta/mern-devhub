import request from '../../utils/request'
import {
  CHAT_LIST_FAIL,
  CHAT_LIST_LOADING,
  CHAT_LIST_SUCCESS,
  MESSAGE_LIST_FAIL,
  MESSAGE_LIST_LOADING,
  MESSAGE_LIST_SUCCESS,
  SEND_MESSAGE_FAIL,
  SEND_MESSAGE_LOADING,
  SEND_MESSAGE_SUCCESS,
} from '../constants/chatConstants'

const getChatList = async dispatch => {
  try {
    dispatch({ type: CHAT_LIST_LOADING })
    const data = await request.get('/api/conversations')
    dispatch({ type: CHAT_LIST_SUCCESS, payload: data })
  } catch (err) {
    console.error(err)
    dispatch({ type: CHAT_LIST_FAIL, payload: err })
  }
}

const getMessageList = username => async dispatch => {
  try {
    dispatch({ type: MESSAGE_LIST_LOADING })
    const data = await request.get(`/api/conversations/${username}`)
    // console.log(data)
    dispatch({ type: MESSAGE_LIST_SUCCESS, payload: data })
  } catch (err) {
    console.error(err)
    dispatch({ type: MESSAGE_LIST_FAIL, payload: err })
  }
}

const sendMessage = data => async dispatch => {
  try {
    dispatch({ type: SEND_MESSAGE_LOADING })
    const result = await request.post(`/api/conversations/sendMessage`, data)
    // console.log(data)
    dispatch({ type: SEND_MESSAGE_SUCCESS, payload: result })
  } catch (err) {
    console.error(err)
    dispatch({ type: SEND_MESSAGE_FAIL, payload: err })
  }
}
export { getChatList, getMessageList, sendMessage }
