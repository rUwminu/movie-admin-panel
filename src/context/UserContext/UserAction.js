// Get All User
export const getUserStart = () => ({
  type: 'GET_USERS_START',
})

export const getUserSuccess = (users) => ({
  type: 'GET_USERS_SUCCESS',
  payload: users,
})

export const getUserFailure = () => ({
  type: 'GET_USERS_FAILURE',
})

// Get Single User
export const getSingleUserStart = () => ({
  type: 'GET_USER_START',
})

export const getSingleUserSuccess = (users) => ({
  type: 'GET_USER_SUCCESS',
  payload: users,
})

export const getSingleUserFailure = () => ({
  type: 'GET_USER_FAILURE',
})

// Delete User
export const deleteUserStart = () => ({
  type: 'DELETE_USER_START',
})

export const deleteUserSuccess = (userId) => ({
  type: 'DELETE_USER_SUCCESS',
  payload: userId,
})

export const deleteUserFailure = () => ({
  type: 'DELETE_USER_FAILURE',
})

// Create User
export const createUserStart = () => ({
  type: 'CREATE_USER_START',
})

export const createUserSuccess = (user) => ({
  type: 'CREATE_USER_SUCCESS',
  payload: user,
})

export const createUserFailure = () => ({
  type: 'CREATE_USER_FAILURE',
})

// Update User
export const updateUserStart = () => ({
  type: 'UPDATE_USER_START',
})

export const updateUserSuccess = (userId) => ({
  type: 'UPDATE_USER_SUCCESS',
  payload: userId,
})

export const updateUserFailure = () => ({
  type: 'UPDATE_USER_FAILURE',
})
