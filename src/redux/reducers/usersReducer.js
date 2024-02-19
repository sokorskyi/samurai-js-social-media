import ApiService from "../../api/service";
import { delay } from "../../util/helpers";

const TOGGLE_FOLLOW = 'users/TOGGLE_FOLLOW';
const SET_USERS = 'users/SET_USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_IS_FETCHING = 'users/SET_IS_FETCHING'
const SET_LIMIT = 'users/SET_LIMIT'
const SET_TOTAL_USERS = 'users/SET_TOTAL_USERS'
const ADD_TO_FOLLOWING_IN_PROGRESS_IDS = 'users/ADD_TO_FOLLOWING_IN_PROGRESS_IDS'
const REMOVE_FROM_FOLLOWING_IN_PROGRESS_IDS = 'users/REMOVE_FROM_FOLLOWING_IN_PROGRESS_IDS'

const initialState = {
  userList: [
    // {
    //   name: 'Artem S.',
    //   photos: {
      // small: null,
    // },
    //   followed: false,
    //   status: 'I like football',
    //   location: {
    //     city: 'Chernihiv',
    //     country: 'Ukraine',
    //   },
    //   id: 1,
    // },
    // {
    //   name: 'Andrew S.',
    //   photos: {
      // small: null,
    // },
    //   followed: true,
    //   status: 'I like base',
    //   location: {
    //     city: 'Kharkiv',
    //     country: 'Ukraine',
    //   },
    //   id: 2,
    // },
    // {
    //   name: 'Anna S.',
    //   photos: {
      // small: null,
    // },
    //   followed: false,
    //   status: 'I like pizza',
    //   location: {
    //     city: 'New York',
    //     country: 'USA',
    //   },
    //   id: 3,
    // },
  ],
  currentPage: 1,
  isFetching: false,
  limit: 10,
  totalUsers: null,
  followingInProgressIds: [],
}

export const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USERS: {
      return {...state, userList: action.payload};
    }
    case TOGGLE_FOLLOW: {
      return {...state, userList: state.userList.map(u => u.id === action.payload.id ? {...u, followed: action.payload.followed} : u)};
    }
    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.payload}
    }
    case SET_IS_FETCHING: {
      return {...state, isFetching: action.payload}
    }
    case SET_LIMIT: {
      return {...state, limit: action.payload}
    }
    case SET_TOTAL_USERS: {
      return {...state, totalUsers: action.payload}
    }
    case ADD_TO_FOLLOWING_IN_PROGRESS_IDS: {
      return {...state, followingInProgressIds: [...state.followingInProgressIds, action.payload]}
    }
    case REMOVE_FROM_FOLLOWING_IN_PROGRESS_IDS: {
      return {...state, followingInProgressIds: state.followingInProgressIds.filter(id => id !== action.payload)}
    }
    default:
      return state
  }
}

export const setUsers = (payload) => ({type: SET_USERS, payload})
export const togglefollow = (payload) => ({type: TOGGLE_FOLLOW, payload})
export const setCurrentPage = (payload) => ({type: SET_CURRENT_PAGE, payload})
export const setIsFetching = (payload) => ({type: SET_IS_FETCHING, payload})
export const setLimit = (payload) => ({type: SET_LIMIT, payload})
export const setTotalUsers = (payload) => ({type: SET_TOTAL_USERS, payload})
export const addToFollowingInProgressIds = (payload) => ({type: ADD_TO_FOLLOWING_IN_PROGRESS_IDS, payload})
export const removeFromFollowingInProgressIds = (payload) => ({type: REMOVE_FROM_FOLLOWING_IN_PROGRESS_IDS, payload})
export const togglefollowUser = (userId, followed) => {
  return async (dispatch) => {
    dispatch(addToFollowingInProgressIds(userId))
    const followMethod = followed ? ApiService.followUser.bind(ApiService) : ApiService.unfollowUser.bind(ApiService);
    const res = await followMethod(userId)
    delay(1200).then(() => {
      dispatch(removeFromFollowingInProgressIds(userId))
      if(res.data.resultCode === 0) {
        dispatch(togglefollow({id: userId, followed }))
      }
    })
  }
}

export const getUsers = (currentPage, limit) => {
  return async (dispatch) => {
    dispatch(setIsFetching(true))
    const response = await ApiService.getUsers(currentPage, limit)
    delay(100).then(() => {
      dispatch(setIsFetching(false))
      if(!response.data.error) {
        dispatch(setUsers(response.data.items))
        dispatch(setTotalUsers(response.data.totalCount))
      }
    })
  }
}

export const selectUsers = (state) => state.users;