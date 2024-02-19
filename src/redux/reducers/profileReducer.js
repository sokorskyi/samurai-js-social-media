import ApiService from "../../api/service";
import { PROFILE_FORM } from "../../util/formConstants";
import { delay } from "../../util/helpers";
import { stopSubmit } from "redux-form";
import { selectAuthorizedUserId } from "./authReducer";

const ADD_POST = 'profile/ADD_POST';
const SET_PROFILE_INFO = 'profile/SET_PROFILE_INFO';
const SET_IS_FETCHING_PROFILE = 'profile/SET_IS_FETCHING_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const SET_UPDATING_STATUS_ERROR = 'profile/SET_UPDATING_STATUS_ERROR';
const SET_IS_FETCHING_STATUS = 'profile/SET_IS_FETCHING_STATUS'
const SET_IS_UPDATING_PROFILE = 'profile/SET_IS_UPDATING_PROFILE'
const SET_IS_UPDATING_AVATAR = 'profile/SET_IS_UPDATING_AVATAR'
const SET_PROFILE_AVATAR = 'profile/SET_PROFILE_AVATAR'

const initialState = {
  posts: [
    {content: 'Hello world!', likesCount: 7, id: 1},
    {content: 'Lately', likesCount: 17, id: 2},
    {content: 'I know', likesCount: 37, id: 3},
    {content: 'Adyous', likesCount: 127, id: 4},
  ],
  profileInfo: null,
  isFetchingProfile: false,
  isUpdatingProfile: false,
  status: '',
  updatingStatusError: '',
  profileAvatar: null,
  isUpdatingAvatar: false,
  isFetchingStatus: false,
}

export const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST: {
      const copyState = {...state};
      const newPost = {
        id: copyState.posts.length + 1,
        likesCount: 0,
        content: action.payload,
      }
      copyState.posts = [...copyState.posts, newPost]
      return copyState;
    }
    case SET_PROFILE_INFO: {
      return {
        ...state,
        profileInfo: action.payload,
      }
    }
    case SET_UPDATING_STATUS_ERROR: {
      return {...state, updatingStatusError: action.payload}
    }
    case SET_IS_UPDATING_AVATAR: {
      return {...state, isUpdatingAvatar: action.payload}
    }
    case SET_PROFILE_AVATAR: {
      return {
        ...state,
        profileAvatar: action.payload,
      }
    }
    case SET_IS_FETCHING_PROFILE: {
      return {
        ...state,
        isFetchingProfile: action.payload,
      }
    }
    case SET_IS_UPDATING_PROFILE: {
      return {
        ...state,
        isUpdatingProfile: action.payload,
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.payload
      }
    }
    case SET_IS_FETCHING_STATUS: {
      return {
        ...state,
        isFetchingStatus: action.payload
      }
    }
    default: {
      return state;
    }
  }
}

export const addPost = (payload) => ({
  type: ADD_POST,
  payload
})

export const setProfileInfo = (payload) => ({
  type: SET_PROFILE_INFO,
  payload,
})

export const setIsFetchingProfile = (payload) => ({
  type: SET_IS_FETCHING_PROFILE,
  payload,
})

export const setIsUpdatingProfile = (payload) => ({
  type: SET_IS_UPDATING_PROFILE,
  payload,
})

export const setIsUpdatingAvatar = (payload) => ({
  type: SET_IS_UPDATING_AVATAR,
  payload,
})

export const setIsFetchingStatus = (payload) => ({
  type: SET_IS_FETCHING_STATUS,
  payload,
})

export const setStatus = (payload) => ({
  type: SET_STATUS,
  payload,
})

export const setProfileAvatar = (payload) => ({
  type: SET_PROFILE_AVATAR,
  payload,
})

export const setUpdatingStatusError = (payload) => ({
  type: SET_UPDATING_STATUS_ERROR,
  payload,
})

export const getProfile = (userId) => {
  return async (dispatch) => {
    dispatch(setIsFetchingProfile(true))
    const res = await ApiService.getProfileInfo(userId)
    delay(1000).then(() => {
      dispatch(setIsFetchingProfile(false))
      if(res.status === 200) {
        dispatch(setProfileInfo(res.data))
        dispatch(setProfileAvatar(res.data.photos.small))
      }
    })
  }
}

export const getProfileStatus = (userId) => {
  return async (dispatch) => {
    dispatch(setIsFetchingStatus(true))
    const res = await ApiService.getProfileStatus(userId)
    delay(4000).then(() => {
      if(res.status === 200) {
        dispatch(setStatus(res.data))
      }
      dispatch(setIsFetchingStatus(false))
    })
  }
}

export const updateProfileStatus = (status) => {
  return async (dispatch) => {
    dispatch(setUpdatingStatusError(null))
    dispatch(setIsFetchingStatus(true))
    const res = await ApiService.updateProfileStatus(status)
    delay(4000).then(() => {
      dispatch(setIsFetchingStatus(false))
      if(res.data.resultCode === 0) {
        dispatch(setStatus(status))
      } else {
        dispatch(setUpdatingStatusError(res.data.messages.join(' ')))
      }
    })
  }
}

export const updateProfile = (profileData) => {
  return async (dispatch, getState) => {
    const authorizedUserId = selectAuthorizedUserId(getState())
    dispatch(setIsUpdatingProfile(true))
    const res = await ApiService.updateProfile(profileData)
    return delay(2000).then(() => {
      dispatch(setIsUpdatingProfile(false))
      if(res.data.resultCode === 0) {
        dispatch(getProfile(authorizedUserId))
      } else {
        return Promise.reject(dispatch(stopSubmit(PROFILE_FORM, {_error: res.data.messages.join(' ')})))
      }
    })
  }
}

export const updateProfileAvatar = (avatarFile) => {
  return async (dispatch) => {
    dispatch(setIsUpdatingAvatar(true))
    const res = await ApiService.uploadAvatar(avatarFile)
    delay(2000).then(() => {
      dispatch(setIsUpdatingAvatar(false))
      if(res.data.resultCode === 0) {
        dispatch(setProfileAvatar(res.data.data.photos.small))
      }
    })
  }
}

export const selectProfile = (state) => state.profile;
