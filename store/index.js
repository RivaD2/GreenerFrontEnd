import { createStore, combineReducers } from 'redux';

import user from './user.js'


const reducers = combineReducers({
    user,
});

const store = () => {
  return createStore(reducers);
}

export default store;