import { getAuthUserData } from './authReducer'

const SET_INITIAL = 'SET_INITIAL'

let initialState = {
  initialized: false,
}
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIAL: {
      return {
        ...state,
        initialized: true,
      }
    }
    default:
      return state
  }
}

export const setInitializedSuccess = () => {
  return {
    type: SET_INITIAL,
  }
}

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData())
  promise.then(() => {
    dispatch(setInitializedSuccess())
  })
}

export default appReducer
