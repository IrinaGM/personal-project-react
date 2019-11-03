import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './rootReducer';

export const store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(reduxThunk)
  );