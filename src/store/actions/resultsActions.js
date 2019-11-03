import {BASE_URL} from "../../Components/Consts";
import {RESULTS_ACTIONS} from "../actionTypes";


export const setResultsIsLoading = () => ({
    type: RESULTS_ACTIONS.RESULTS_LOADING
});

export const setResultsFailure = () => ({
    type: RESULTS_ACTIONS.RESULTS_FAILURE
});

export const setResultsData = (data) => ({
    type: RESULTS_ACTIONS.RESULTS_SUCCESS,
    forkedRepoListData: data.forkedRepoListData,
    pullRequestListData: data.pullRequestListData 
});

export const getEventsData = (userName) => dispatch => {

    dispatch(setResultsIsLoading());
    fetch(`${BASE_URL}/${userName}/events`)
        .then(response => response.json())
        .then(data => {
            const forkedRepoListData = data
                .filter(forkEvent => forkEvent.type === "ForkEvent")
                .map(forkEvent => 
                    ({
                        title: forkEvent.payload.forkee.full_name,
                        html_url: forkEvent.payload.forkee.html_url,
                        forked_from: forkEvent.repo.name
                    })
                )
            
            const pullRequestListData = data
                .filter(pullEvent => pullEvent.type === "PullRequestEvent")
                .map(pullEvent => 
                    ({
                        title: pullEvent.payload.pull_request.title,
                        html_url: pullEvent.payload.pull_request.html_url,
                        status: pullEvent.payload.pull_request.state
                    })
            )
            return {
                forkedRepoListData:forkedRepoListData,
                pullRequestListData:pullRequestListData
            }
        })
        .then(data => dispatch(setResultsData(data)))
        .catch(error => dispatch(setResultsFailure()));       
};
