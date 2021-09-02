import React from 'react';
import ReactDOM from 'react-dom';
import store from './store.js'
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

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


