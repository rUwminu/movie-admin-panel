import axios from 'axios'
import { loginFailure, loginStart, loginSuccess, logout } from './AuthAction'

const baseUrl = 'https://full-stack-api-netflix-app.herokuapp.com/api'

export const login = async (user, dispatch) => {
  dispatch(loginStart())

  try {
    const res = await axios.post(`${baseUrl}/auth/login`, user)
    res.data.isAdmin && dispatch(loginSuccess(res.data))
  } catch (err) {
    dispatch(loginFailure())
  }
}

export const userLogout = (dispatch) => {
  dispatch(logout())
  localStorage.removeItem('user')
}
