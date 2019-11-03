import {BASE_URL} from "../../Components/Consts";
import {SEARCH_ACTIONS} from "../actionTypes";


export const setSearchIsLoading = () => ({
    type: SEARCH_ACTIONS.SEARCH_LOADING
});

export const setSearchFailure = (error) => ({
    type: SEARCH_ACTIONS.SEARCH_FAILURE,
    msg: error
});

export const setSearchSuccess = (userName) => ({
    type: SEARCH_ACTIONS.RESULTS_SUCCESS,
    userName: userName
});

export const setSearchNewUser = () => ({
    type: SEARCH_ACTIONS.NEW_USER_SEARCH,
    userFound: false
});


export const checkUser = (userName) => dispatch => {

    dispatch(setSearchIsLoading());
    fetch(`${BASE_URL}/${userName}`)
            .then(response => response.json())
            .then(user => user.message ? dispatch(setSearchFailure(user.message)) : dispatch(setSearchSuccess(user.login)))
            .catch(error => setSearchFailure(error.message)); 
};