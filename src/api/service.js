import client from "../client/axios";


class ApiService {
  static async getUsers(page = 1, limit = 10) {
    return client.get('/users', {
      params: {
        count: limit,
        page,
      }
    })
  }
  
  static async getProfileInfo(userId) {
    return client.get('/profile/' + userId)
  }
  
  static async getAuthMe() {
    return client.get('/auth/me')
  }
  
  static async followUser(userId) {
    return client.post('/follow/' + userId)
  }
  
  static async unfollowUser(userId) {
    return client.delete('/follow/' + userId)
  }
  
  static async getProfileStatus(userId) {
    return client.get('/profile/status/' + userId)
  }
  
  static async updateProfileStatus(status) {
    return client.put('/profile/status', { status })
  }
  
  static async login(data) {
    return client.post('/auth/login', data)
  }
  
  static async logout() {
    return client.delete('/auth/login')
  }
  
  static async updateProfile(data) {
    return client.put('/profile', data)
  }
  
  static async getCaptchaUrl() {
    return client.get('/security/get-captcha-url')
  }
  
  static async uploadAvatar(image) {
    const formData  = new FormData();
    formData.append('image', image);
    return client.put('/profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
  }
}

export default ApiService;
