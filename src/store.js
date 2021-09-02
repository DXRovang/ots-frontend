import instrumentReducer from './reducers/instrumentReducer'
import makerReducer from './reducers/makerReducer'
import userReducer from './reducers/userReducer'
import currentUser from './reducers/ current_user'
// import { sessionReducer, sessionService } from 'redux-react-session';
// import { sessionReducer } from 'redux-react-session';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combinedReducer = combineReducers(
  {instruments: instrumentReducer, 
   makers: makerReducer,
   users: userReducer,
   currentUser: currentUser
  //  session: sessionReducer
  }
)
let store = createStore(combinedReducer, composeEnhancers(applyMiddleware(thunk)))

export default store