import axios from 'axios'
import {
  getListsStart,
  getListsSuccess,
  getListsFailure,
  deleteListStart,
  deleteListSuccess,
  deleteListFailure,
  createListStart,
  createListSuccess,
  createListFailure,
} from './ListAction'

const baseUrl = 'https://full-stack-api-netflix-app.herokuapp.com/api'

export const getList = async (dispatch) => {
  dispatch(getListsStart())

  try {
    const res = await axios.get(`${baseUrl}/lists`, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
      },
    })
    dispatch(getListsSuccess(res.data))
  } catch (err) {
    dispatch(getListsFailure())
  }
}

export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart())

  try {
    await axios.delete(`${baseUrl}/lists/${id}`, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
      },
    })
    dispatch(deleteListSuccess(id))
  } catch (err) {
    dispatch(deleteListFailure())
  }
}

export const createList = async (list, dispatch) => {
  dispatch(createListStart())

  try {
    const res = await axios.post(`${baseUrl}/lists`, list, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
      },
    })
    dispatch(createListSuccess(res.data))
  } catch (err) {
    dispatch(createListFailure())
  }
}
