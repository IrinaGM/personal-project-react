import {SEARCH_ACTIONS} from "../actionTypes";

const USER_INITIAL_STATE = {
    userName: '',
    isLoading: false,
    errMsg: '',
    userFound: false
};

export const userSearchReducer = (state = USER_INITIAL_STATE, action) => {
    switch (action.type) {
        case SEARCH_ACTIONS.SEARCH_LOADING:
            return {
                ...state,
                isLoading: true,
                errMsg: ''
            };
        case SEARCH_ACTIONS.SEARCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userName: action.userName,
                userFound: true
            };
        case SEARCH_ACTIONS.SEARCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                errMsg: action.msg
            };
        case SEARCH_ACTIONS.NEW_USER_SEARCH:
            return {
                ...state,
                userName: '',
                isLoading: false,
                errMsg: '',
                userFound: false
            };
        default:
            return state;

    }
};