import {combineReducers} from 'redux';

import {userSearchReducer} from './reducers/userSearchReducer';
import {resultsReducer} from './reducers/resultsReducer';

export default combineReducers({
    userSearchReducer,
    resultsReducer
})
