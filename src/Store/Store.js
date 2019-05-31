import { createStore } from 'redux';
import pageReducer from './Reducers';

const store = createStore(pageReducer);
export default store;