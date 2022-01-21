import request from '../../utils/request'
import {
  DELETE_PROFILE_FIELDS_FAIL,
  DELETE_PROFILE_FIELDS_LOADING,
  DELETE_PROFILE_FIELDS_SUCCESS,
  PROFILES_FAIL,
  PROFILES_LOADING,
  PROFILES_SUCCESS,
  PROFILE_FAIL,
  PROFILE_LOADING,
  PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_LOADING,
  UPDATE_PROFILE_SUCCESS,
} from '../constants/profileConstants'

export const getProfile = async dispatch => {
  try {
    dispatch({ type: PROFILE_LOADING })
    const result = await request.get('/api/user/profile/me')
    dispatch({ type: PROFILE_SUCCESS, payload: result })
  } catch (err) {
    console.error(err)
    dispatch({ type: PROFILE_FAIL, payload: err })
  }
}

export const updateProfile = data => async dispatch => {
  try {
    dispatch({ type: UPDATE_PROFILE_LOADING })
    const result = await request.put('/api/user/profile/me', data)
    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: result })
  } catch (err) {
    console.error(err)
    dispatch({ type: UPDATE_PROFILE_FAIL, payload: err })
  }
}

export const deleteProfileFields = data => async dispatch => {
  try {
    dispatch({ type: DELETE_PROFILE_FIELDS_LOADING })
    const result = await request.delete('/api/user/profile/me', data)
    dispatch({ type: DELETE_PROFILE_FIELDS_SUCCESS, payload: result })
  } catch (err) {
    console.error(err)
    dispatch({ type: DELETE_PROFILE_FIELDS_FAIL, payload: err })
  }
}

export const getProfiles = async dispatch => {
  try {
    dispatch({ type: PROFILES_LOADING })
    const result = await request.get('/api/user/profile')
    dispatch({ type: PROFILES_SUCCESS, payload: result })
  } catch (err) {
    console.error(err)
    dispatch({ type: PROFILES_FAIL, payload: err })
  }
}

export const getProfileByUsername = username => async dispatch => {
  try {
    dispatch({ type: PROFILES_LOADING })
    const result = await request.get(`/api/user/profile/${username}`)
    dispatch({ type: PROFILES_SUCCESS, payload: result })
  } catch (err) {
    console.error(err)
    dispatch({ type: PROFILES_FAIL, payload: err })
  }
}
