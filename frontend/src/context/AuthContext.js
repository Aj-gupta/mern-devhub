import { createContext, useReducer, useEffect, useCallback } from 'react'
import { USER_INFO_SUCCESS } from '../redux/constants/userConstants'
import { userInfoReducer } from '../redux/reducers/userReducer'
import { getUserInfo, logout as signOut } from '../redux/actions/userActions'

const AuthContext = createContext()
AuthContext.displayName = 'AuthContext'

const AuthProvider = props => {
  const [{ loading, user, error }, dispatch] = useReducer(userInfoReducer, {
    loading: true,
  })

  console.log(loading, user, error)
  const logout = useCallback(() => signOut()(dispatch))
  const setUser = useCallback(
    data => dispatch({ type: USER_INFO_SUCCESS, payload: data }),
    [dispatch],
  )
  useEffect(() => {
    getUserInfo(dispatch)
  }, [dispatch])

  const isLogin = !!user

  return (
    <AuthContext.Provider
      value={{
        user,
        isLogin,
        loading,
        error,
        setUser,
        logout,
      }}
      {...props}
    />
  )
}

export { AuthContext, AuthProvider }
