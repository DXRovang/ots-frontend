import React from 'react';
import ReactDOM from 'react-dom';
import { sessionReducer, sessionService } from 'redux-react-session';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import instrumentReducer from './reducers/instrumentReducer'
import makerReducer from './reducers/makerReducer'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combinedReducer = combineReducers(
  {instruments: instrumentReducer, 
   makers: makerReducer,
   session: sessionReducer}
)
let store = createStore(combinedReducer, composeEnhancers(applyMiddleware(thunk)))

sessionService.initSessionService(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
document.getElementById('root')
);


