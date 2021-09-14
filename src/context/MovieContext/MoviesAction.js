// Get Movies List
export const getMoviesStart = () => ({
  type: 'GET_MOVIES_START',
})

export const getMoviesSuccess = (movies) => ({
  type: 'GET_MOVIES_SUCCESS',
  payload: movies,
})

export const getMoviesFailure = () => ({
  type: 'GET_MOVIES_FAILURE',
})

// Delete Movie
export const deleteMoviesStart = () => ({
  type: 'DELETE_MOVIES_START',
})

export const deleteMoviesSuccess = (movieId) => ({
  type: 'DELETE_MOVIES_SUCCESS',
  payload: movieId,
})

export const deleteMoviesFailure = () => ({
  type: 'DELETE_MOVIES_FAILURE',
})

// Create Movie
export const createMoviesStart = () => ({
  type: 'CREATE_MOVIES_START',
})

export const createMoviesSuccess = (movie) => ({
  type: 'CREATE_MOVIES_SUCCESS',
  payload: movie,
})

export const createMoviesFailure = () => ({
  type: 'CREATE_MOVIES_FAILURE',
})

// Update Movie
export const updateMoviesStart = () => ({
  type: 'UPDATE_MOVIES_START',
})

export const updateMoviesSuccess = (movieId) => ({
  type: 'UPDATE_MOVIES_SUCCESS',
  payload: movieId,
})

export const updateMoviesFailure = () => ({
  type: 'UPDATE_MOVIES_FAILURE',
})
