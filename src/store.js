// store.js

import { createStore } from 'redux';
import reducer from './reducer'; // Импортируем наш редьюсер

const store = createStore(reducer);

export default store;
