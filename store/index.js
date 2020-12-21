import { createStore, combineReducers } from 'redux';

import user from './user.js'
import plants from './plants.js'
import terrarium from './terrarium.js'

const reducers = combineReducers({
    user,
    plants,
    terrarium,
});

const store = () => {
  return createStore(reducers);
}

export default store;