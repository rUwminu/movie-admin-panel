import axios from 'axios'
import {
  getMoviesStart,
  getMoviesSuccess,
  getMoviesFailure,
  deleteMoviesStart,
  deleteMoviesSuccess,
  deleteMoviesFailure,
  createMoviesStart,
  createMoviesSuccess,
  createMoviesFailure,
  updateMoviesStart,
  updateMoviesSuccess,
  updateMoviesFailure,
} from './MoviesAction'

const baseUrl = 'https://full-stack-api-netflix-app.herokuapp.com/api'

export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart())

  try {
    const res = await axios.get(`${baseUrl}/movies`, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
      },
    })
    dispatch(getMoviesSuccess(res.data))
  } catch (err) {
    dispatch(getMoviesFailure())
  }
}

export const deleteMovies = async (movieId, dispatch) => {
  dispatch(deleteMoviesStart())

  try {
    await axios.delete(`${baseUrl}/movies/${movieId}`, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
      },
    })
    dispatch(deleteMoviesSuccess(movieId))
  } catch (err) {
    dispatch(deleteMoviesFailure())
  }
}

export const createMovies = async (movie, dispatch) => {
  dispatch(createMoviesStart())

  try {
    const res = await axios.post(`${baseUrl}/movies`, movie, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
      },
    })
    dispatch(createMoviesSuccess(res.data))
  } catch (err) {
    dispatch(createMoviesFailure())
  }
}

export const updateMovies = async (movie, dispatch) => {
  dispatch(updateMoviesStart())

  try {
    const res = await axios.put(`${baseUrl}/movies/${movie.id}`, movie, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
      },
    })
    dispatch(updateMoviesSuccess(res.data))
  } catch (err) {
    dispatch(updateMoviesFailure())
  }
}
