import axios from 'axios'
import {
  getUserStart,
  getUserSuccess,
  getUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  createUserStart,
  createUserSuccess,
  createUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  getSingleUserStart,
  getSingleUserSuccess,
  getSingleUserFailure,
} from './UserAction'

const baseUrl = 'https://full-stack-api-netflix-app.herokuapp.com/api'

export const getUsers = async (dispatch) => {
  dispatch(getUserStart())

  try {
    const res = await axios.get(`${baseUrl}/user`, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
      },
    })
    dispatch(getUserSuccess(res.data))
  } catch (err) {
    dispatch(getUserFailure())
  }
}

export const getSingleUsers = async (userId, dispatch) => {
  dispatch(getSingleUserStart())

  try {
    const res = await axios.get(`${baseUrl}/user/${userId}`, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
      },
    })
    dispatch(getSingleUserSuccess(res.data))
  } catch (err) {
    dispatch(getSingleUserFailure())
  }
}

export const deleteUser = async (userId, dispatch) => {
  dispatch(deleteUserStart())

  try {
    await axios.delete(`${baseUrl}/user/${userId}`, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
      },
    })
    dispatch(deleteUserSuccess(userId))
  } catch (err) {
    dispatch(deleteUserFailure())
  }
}

export const createUser = async (user, dispatch) => {
  dispatch(createUserStart())

  try {
    const res = await axios.post(`${baseUrl}/user/create`, user, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
      },
    })
    dispatch(createUserSuccess(res.data))
  } catch (err) {
    dispatch(createUserFailure())
  }
}

export const updateUser = async (user, dispatch) => {
  dispatch(updateUserStart())

  try {
    const res = await axios.put(`${baseUrl}/user/${user.id}`, user, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
      },
    })
    dispatch(updateUserSuccess(res.data))
  } catch (err) {
    dispatch(updateUserFailure())
  }
}
