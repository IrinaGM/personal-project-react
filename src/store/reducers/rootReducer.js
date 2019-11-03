import {combineReducers} from 'redux';

import {userSearchReducer} from './userSearchReducer';
import {resultsReducer} from './resultsReducer';

export default combineReducers({
    userSearchReducer,
    resultsReducer
})
