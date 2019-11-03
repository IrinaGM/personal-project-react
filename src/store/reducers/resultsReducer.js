import {RESULTS_ACTIONS} from "../actionTypes";

const RESULTS_INITIAL_STATE = {
        forkedRepoListData:[],
        pullRequestListData:[],
        isLoading:false,
        isError:false
};

export const resultsReducer = (state = RESULTS_INITIAL_STATE, action) => {
    switch (action.type) {
        case RESULTS_ACTIONS.RESULTS_LOADING:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case RESULTS_ACTIONS.RESULTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                forkedRepoListData: action.forkedRepoListData,
                pullRequestListData: action.pullRequestListData
            };
        case RESULTS_ACTIONS.RESULTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        default:
            return state;
    }
};