import { stopSubmit, clearFields } from "redux-form"
import ApiService from "../../api/service"
import { delay } from "../../util/helpers"
import { LOGIN_FORM } from "../../util/formConstants"
import {} from 'redux-form';

const SET_AUTHORIZED_USER_ID = 'auth/SET_AUTHORIZED_USER_ID'
const SET_USER_INFO = 'auth/SET_USER_INFO'
const SET_FETCHING_USER_INFO = 'auth/SET_FETCHING_USER_INFO'
const SET_IS_LOGGING = 'auth/SET_IS_LOGGING'
const SET_FETCHING_LOGOUT = 'auth/SET_FETCHING_LOGOUT'
const SET_FETCHING_CAPTCHA_URL = 'auth/SET_FETCHING_CAPTCHA_URL'
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL'

const initialState = {
  authorizedUserId: null,
  userInfo: null,
  isFetchingUserInfo: false,
  isFetchingLogout: false,
  isFetchingCaptchaUrl: false,
  isLogging: false,
  captchaUrl: null,
}

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_AUTHORIZED_USER_ID: {
      return {...state, authorizedUserId: action.payload}
    }
    case SET_USER_INFO: {
      return {...state, userInfo: action.payload}
    }
    case SET_FETCHING_USER_INFO: {
      return {...state, isFetchingUserInfo: action.payload}
    }
    case SET_IS_LOGGING: {
      return {...state, isLogging: action.payload}
    }
    case SET_CAPTCHA_URL: {
      return {...state, captchaUrl: action.payload}
    }
    case SET_FETCHING_CAPTCHA_URL: {
      return {...state, isFetchingCaptchaUrl: action.payload}
    }
    case SET_FETCHING_LOGOUT: {
      return {...state, isFetchingLogout: action.payload}
    }
    default: 
      return state;
  }
}

export const setAuthorizedUserId = (payload) => ({type: SET_AUTHORIZED_USER_ID, payload})
export const setUserInfo = (payload) => ({type: SET_USER_INFO, payload})
export const setFetchingUserInfo = (payload) => ({type: SET_FETCHING_USER_INFO, payload})
export const setFetchingLogout = (payload) => ({type: SET_FETCHING_LOGOUT, payload})
export const setIsLogging = (payload) => ({type: SET_IS_LOGGING, payload})
export const setCaptchaUrl = (payload) => ({type: SET_CAPTCHA_URL, payload})
export const setFetchingCaptchaUrl = (payload) => ({type: SET_FETCHING_CAPTCHA_URL, payload})

export const getAuthUser = () => {
  return async (dispatch) => {
    const response = await ApiService.getAuthMe()
    if(response.data.resultCode === 0) {
      await delay(1000)
      const {id: currentUserId} = response.data.data;
      dispatch(setAuthorizedUserId(currentUserId))
      return dispatch(getUserInfo())
    }
  }
}

export const getUserInfo = () => {
  return async (dispatch, getState) => {
    const authorizedUserId = selectAuthorizedUserId(getState())
    dispatch(setFetchingUserInfo(true))
    const profileInfoResponse = await ApiService.getProfileInfo(authorizedUserId)
    await delay(2000)
    dispatch(setFetchingUserInfo(false))
    if(profileInfoResponse.status === 200) {
      dispatch(setUserInfo(profileInfoResponse.data))
    }
  }
}

export const login = (loginData) => {
  return async (dispatch) => {
    dispatch(setIsLogging(true))
    const res = await ApiService.login(loginData)
    await delay(2000)
    dispatch(setIsLogging(false))
    if(!res.data.resultCode) {
      dispatch(setAuthorizedUserId(res.data.data.userId))
      dispatch(getUserInfo())
      dispatch(setCaptchaUrl(null))
    } else {
      if(res.data.resultCode === 10) {
        dispatch(saveCaptchaUrl())
        dispatch(clearFields(LOGIN_FORM, false, false, 'captcha'))
      }

      const action = stopSubmit(LOGIN_FORM, {
        _error: res.data.messages.join(' ')
      })
      dispatch(action)
    }
  }
}

export const saveCaptchaUrl = () => {
  return async (dispatch) => {
    dispatch(setFetchingCaptchaUrl(true))
    const res = await ApiService.getCaptchaUrl()
    dispatch(setCaptchaUrl(res.data.url))
    dispatch(setFetchingCaptchaUrl(false))
  }
}

export const logout = () => {
  return async (dispatch) => {
    dispatch(setFetchingLogout(true))
    const res = await ApiService.logout()
    delay(2000).then(() => {
      dispatch(setFetchingLogout(false))
      if(!res.data.resultCode) {
        dispatch(setAuthorizedUserId(null))
        dispatch(setUserInfo(null))
      }
    })
  }
}

export const selectAuth = (state) => state.auth
export const selectAuthorizedUserId = (state) => selectAuth(state).authorizedUserId
export const selectFetchingLogout = (state) => selectAuth(state).isFetchingLogout