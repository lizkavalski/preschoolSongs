import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import songs from './songs.js';

let reducers = combineReducers({ songs });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();