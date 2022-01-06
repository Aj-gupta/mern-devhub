import request from '../../utils/request'
import {
  USER_INFO_LOADING,
  USER_INFO_SUCCESS,
  USER_INFO_FAIL,
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_LOADING,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from '../constants/userConstants'

const getUserInfo = async dispatch => {
  try {
    dispatch({ type: USER_INFO_LOADING })

    const data = await request.get('/api/user')

    // console.log(data)
    dispatch({ type: USER_INFO_SUCCESS, payload: data })
  } catch (err) {
    console.log('Error:', err)
    dispatch({ type: USER_INFO_FAIL, payload: err })
  }
}

const login = (loginId, password) => async dispatch => {
  try {
    dispatch({ type: USER_LOGIN_LOADING })

    const data = await request.post('/api/user/login', { loginId, password })

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
  } catch (error) {
    console.log('Error:', error)
    dispatch({ type: USER_LOGIN_FAIL, payload: error })
  }
}

const logout = () => async dispatch => {
  try {
    const data = await request.get('/api/user/logout')
    dispatch({ type: USER_LOGOUT, payload: data })
  } catch (err) {
    console.error(err)
  }
}

const register = user => async dispatch => {
  try {
    dispatch({ type: USER_REGISTER_LOADING })

    const data = await request.post('/api/user/register', user)
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data })
  } catch (error) {
    console.log('Error:', error)
    dispatch({ type: USER_REGISTER_FAIL, payload: error })
  }
}

export { login, getUserInfo, logout, register }
