import {
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_LOADING,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_INFO_LOADING,
  USER_INFO_SUCCESS,
  USER_INFO_FAIL,
} from '../constants/userConstants'

export const userLoginReducer = (state, action) => {
  switch (action.type) {
    case USER_LOGIN_LOADING:
      return { loading: true }
    case USER_LOGIN_SUCCESS:
      return { loading: false, user: action.payload }
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_LOADING:
      return { loading: true }
    case USER_REGISTER_SUCCESS:
      return { loading: false, user: action.payload }
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userInfoReducer = (state, action) => {
  switch (action.type) {
    case USER_INFO_LOADING:
      return { loading: true }
    case USER_INFO_SUCCESS:
      return { loading: false, user: action.payload }
    case USER_INFO_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}
