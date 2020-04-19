import { usersAPI } from '../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const IS_FETCHING = 'IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'
let initialState = {
  users: [],
  pageSize: 5,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
}
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            console.log(user)
            return {
              ...user,
              followed: true,
            }
          }
          return user
        }),
      }
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            console.log(user)
            return {
              ...user,
              followed: false,
            }
          }
          return user
        }),
      }
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUserCount: action.count }
    }
    case SET_USERS: {
      return { ...state, users: action.users }
    }
    case IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      }
    }
    default:
      return state
  }
}

const Follow = (userId) => {
  return {
    type: FOLLOW,
    userId,
  }
}
const unFollow = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  }
}

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  }
}
export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: page,
  }
}
export const followingProgress = (isFetching, userId) => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
  }
}
export const setTotalUsersCount = (count) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    count: count,
  }
}
export const setIsFetching = (bool) => {
  return {
    type: IS_FETCHING,
    isFetching: bool,
  }
}

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setIsFetching(false))
      dispatch(setUsers(data.items))
      dispatch(setTotalUsersCount(data.totalCount))
    })
  }
}
export const toggleFollow = (userId) => {
  return (dispatch) => {
    dispatch(followingProgress(true, userId))
    usersAPI.follow(userId).then((data) => {
      if (data.resultCode == 0) {
        dispatch(Follow(userId))
      }
      dispatch(followingProgress(false, userId))
    })
  }
}
export const toggleUnfollow = (userId) => {
  return (dispatch) => {
    dispatch(followingProgress(true, userId))
    usersAPI.unFollow(userId).then((data) => {
      if (data.resultCode == 0) {
        dispatch(unFollow(userId))
      }
      dispatch(followingProgress(false, userId))
    })
  }
}

export default usersReducer
