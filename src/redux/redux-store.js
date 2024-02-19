import { applyMiddleware, combineReducers, createStore } from "redux";
import { chatReducer } from "./reducers/chatReducer";
import { profileReducer } from "./reducers/profileReducer";
import { navbarReducer } from "./reducers/navbarReducer";
import { usersReducer } from "./reducers/usersReducer";
import { authReducer } from "./reducers/authReducer";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from "redux-thunk";
import { appReducer } from "./reducers/appReducer";
import { composeWithDevTools } from '@redux-devtools/extension';


const rootReducer = combineReducers({
  chat: chatReducer,
  profile: profileReducer,
  navbar: navbarReducer,
  users: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
})


const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunkMiddleware)
))

export default store;