import request from '../../utils/request'
import {
  CHAT_LIST_FAIL,
  CHAT_LIST_LOADING,
  CHAT_LIST_SUCCESS,
  MESSAGE_LIST_FAIL,
  MESSAGE_LIST_LOADING,
  MESSAGE_LIST_SUCCESS,
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

export { getChatList, getMessageList }
