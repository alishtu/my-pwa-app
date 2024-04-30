// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducer';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'; // Импортируем serviceWorkerRegistration
import './index.css';
import App from './App';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorkerRegistration.register(); // Регистрируем сервисный работник
