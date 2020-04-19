import { usersAPI, profileAPI } from '../api/api'

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
let initialState = {
  posts: [
    { id: 1, post: 'Hi', likesCount: 20 },
    { id: 2, post: 'How are YOU', likesCount: 25 },
  ],
  profile: null,
  status: '',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = { id: 3, post: action.newPostBody, likesCount: 0 }
      return {
        ...state,
        posts: [...state.posts, newPost],
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      }
    }
    default:
      return state
  }
}

export const addPostActionCreator = (newPostBody) => {
  return {
    type: ADD_POST,
    newPostBody,
  }
}
export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  }
}

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status: status,
  }
}

export const getUserProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId).then((responce) => {
      if (responce.data !== null) {
        dispatch(setUserProfile(responce.data))
      }
    })
  }
}
export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((responce) => {
    if (responce.data !== null) {
      dispatch(setStatus(responce.data))
    }
  })
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateUserStatus(status).then((responce) => {
    if (responce.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  })
}

export default profileReducer
