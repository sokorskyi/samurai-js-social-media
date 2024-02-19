import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter} from 'react-router-dom'
import store from './redux/redux-store';
import { Provider } from 'react-redux';

window.store = store;

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store} >
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

