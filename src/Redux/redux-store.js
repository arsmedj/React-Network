import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import sideBarReducer from './sideBarReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import { reducer as formReducer } from 'redux-form'
import appReducer from './appReducer'
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideBarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
})

let store = createStore(reducers, applyMiddleware(thunk))
window.store = store

export default store
