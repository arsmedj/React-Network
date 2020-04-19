import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '176315af-7099-4a7a-bdbe-36caead0c2cb',
  },
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((responce) => {
        return responce.data
      })
  },
  unFollow(userId) {
    return instance.delete(`follow/${userId}`).then((responce) => {
      return responce.data
    })
  },
  follow(userId) {
    return instance.post(`follow/${userId}`).then((responce) => {
      return responce.data
    })
  },
  getProfile(userId) {
    return profileAPI.getProfile(userId)
  },
}
export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe })
  },
  logout() {
    return instance.delete(`auth/login`)
  },
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get('profile/' + userId)
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId)
  },
  updateUserStatus(status) {
    return instance.put(`profile/status`, { status: status })
  },
}
