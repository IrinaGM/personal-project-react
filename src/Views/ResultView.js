import React, {useEffect} from "react";
import Button from "react-bootstrap/Button";
import ForkedRepoList from "../Components/ForkedRepoList";
import PullRequestList from "../Components/PullRequestList";
import {LoadingMessage, ErrMessage} from "../Components/Messages";
import {getEventsData} from "../store/actions/resultsActions";
import { useDispatch, useSelector } from 'react-redux';
import {setSearchNewUser} from "../store/actions/searchActions";

const ResultView = ({toggleSearchView}) => {
    const dispatch = useDispatch();
    const userName = useSelector(state => state.userSearchReducer.userName);
    const forkedRepoListData = useSelector(state => state.resultsReducer.forkedRepoListData);
    const pullRequestListData = useSelector(state => state.resultsReducer.pullRequestListData);
    const isLoading = useSelector(state => state.resultsReducer.isLoading); 
    const isError = useSelector(state => state.resultsReducer.isError);

    useEffect(() => {
        dispatch(getEventsData(userName));
    },[userName,dispatch]);

    const handleNewSearch = () => {
        dispatch(setSearchNewUser());
    };

    return <div>
        <h1> GitHub Information for {userName} </h1>
        { isLoading ? <LoadingMessage msg="User data is loading ..." /> :
            isError ? <ErrMessage msg="Could not fetch user data" /> :
            <div>
                <ForkedRepoList data={forkedRepoListData}/>
                <PullRequestList data={pullRequestListData}/>
                <label htmlFor="SearchAnotherUser"/>
                <Button variant="primary" onClick={handleNewSearch}>Search New User</Button>
            </div>
        } 
    </div>
};

export default ResultView;