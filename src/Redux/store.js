import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

// Create Redux store
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
