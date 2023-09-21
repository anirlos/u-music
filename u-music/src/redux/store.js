import { createStore } from 'redux';
import rootReducer from '../redux/rootReducer.js'; 

const store = createStore(rootReducer);

export default store;
