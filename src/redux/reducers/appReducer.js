import { stopSubmit } from "redux-form"
import ApiService from "../../api/service"
import { delay } from "../../util/helpers"
import { getAuthUser } from "./authReducer"

const SET_IS_APP_INITIALIZED = 'auth/SET_IS_APP_INITIALIZED'
const SET_GLOBAL_ERROR = 'auth/SET_GLOBAL_ERROR'

const initialState = {
  isAppInitialized: false,
  globalError: null,
}

export const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_IS_APP_INITIALIZED: {
      return {...state, isAppInitialized: action.payload}
    }
    case SET_GLOBAL_ERROR: {
      return {...state, globalError: action.payload}
    }
    default: 
      return state;
  }
}

export const setIsAppInitialized = (payload) => ({type: SET_IS_APP_INITIALIZED, payload})
export const setGlobalError = (payload) => ({type: SET_GLOBAL_ERROR, payload})

export const initApp = () => {
  return async (dispatch) => {
    await dispatch(getAuthUser())
    dispatch(setIsAppInitialized(true))
  }
}

export const selectApp = (state) => state.app;