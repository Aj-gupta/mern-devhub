import {
  DELETE_PROFILE_FIELDS_FAIL,
  DELETE_PROFILE_FIELDS_LOADING,
  DELETE_PROFILE_FIELDS_SUCCESS,
  GET_GITREPOS_FAIL,
  GET_GITREPOS_LOADING,
  GET_GITREPOS_SUCCESS,
  GET_PROFILEBYUSERNAME_FAIL,
  GET_PROFILEBYUSERNAME_LOADING,
  GET_PROFILEBYUSERNAME_SUCCESS,
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

export const getProfileReducer = (state, action) => {
  switch (action.type) {
    case PROFILE_LOADING:
      return { loading: true }
    case PROFILE_SUCCESS:
      return { loading: false, profile: action.payload }
    case PROFILE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const updateProfileReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_LOADING:
      return { loading: true }
    case UPDATE_PROFILE_SUCCESS:
      return { loading: false, data: action.payload }
    case UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const deleteProfileFieldsReducer = (state, action) => {
  switch (action.type) {
    case DELETE_PROFILE_FIELDS_LOADING:
      return { loading: true }
    case DELETE_PROFILE_FIELDS_SUCCESS:
      return { loading: false, data: action.payload }
    case DELETE_PROFILE_FIELDS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const getProfilesReducer = (state, action) => {
  switch (action.type) {
    case PROFILES_LOADING:
      return { loading: true }
    case PROFILES_SUCCESS:
      return { loading: false, data: action.payload }
    case PROFILES_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const getGitReposReducer = (state, action) => {
  switch (action.type) {
    case GET_GITREPOS_LOADING:
      return { loading: true }
    case GET_GITREPOS_SUCCESS:
      return { loading: false, data: action.payload }
    case GET_GITREPOS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const getProfileByUsernameReducer = (state, action) => {
  switch (action.type) {
    case GET_PROFILEBYUSERNAME_LOADING:
      return { loading: true }
    case GET_PROFILEBYUSERNAME_SUCCESS:
      return { loading: false, data: action.payload }
    case GET_PROFILEBYUSERNAME_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
