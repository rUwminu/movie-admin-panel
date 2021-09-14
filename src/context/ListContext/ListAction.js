// Get List
export const getListsStart = () => ({
  type: 'GET_LIST_START',
})

export const getListsSuccess = (list) => ({
  type: 'GET_LIST_SUCCESS',
  payload: list,
})

export const getListsFailure = () => ({
  type: 'GET_LIST_FAILURE',
})

// Delete Movie
export const deleteListStart = () => ({
  type: 'DELETE_LIST_START',
})

export const deleteListSuccess = (id) => ({
  type: 'DELETE_LIST_SUCCESS',
  payload: id,
})

export const deleteListFailure = () => ({
  type: 'DELETE_LIST_FAILURE',
})

// Create List
export const createListStart = () => ({
  type: 'CREATE_LIST_START',
})

export const createListSuccess = (list) => ({
  type: 'CREATE_LIST_SUCCESS',
  payload: list,
})

export const createListFailure = () => ({
  type: 'CREATE_LIST_FAILURE',
})

// Update List
export const updateListStart = () => ({
  type: 'UPDATE_LIST_START',
})

export const updateListSuccess = (id) => ({
  type: 'UPDATE_LIST_SUCCESS',
  payload: id,
})

export const updateListFailure = () => ({
  type: 'UPDATE_LIST_FAILURE',
})
