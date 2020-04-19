export const getUsersSelector = (state) => {
  return state.usersPage.users
}
export const getPageSizeSelector = (state) => {
  return state.usersPage.pageSize
}
export const getTotalUsersCountSelector = (state) => {
  return state.usersPage.totalUserCount
}
export const getCurrentPage = (state) => {
  return state.usersPage.currentPage
}
export const getIsFetching = (state) => {
  return state.usersPage.isFetching
}
export const getFollowingProgress = (state) => {
  return state.usersPage.followingInProgress
}
