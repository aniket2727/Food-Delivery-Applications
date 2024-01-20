// store/index.js
import { createStore } from 'redux';
import rootReducer from '../reducers'; // Import your combined reducers

const store = createStore(rootReducer);

export default store;
