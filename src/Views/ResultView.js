import React from "react";
import Button from "react-bootstrap/Button";
import ForkedRepoList from "../Components/ForkedRepoList";
import PullRequestList from "../Components/PullRequestList";

const ResultView = (props) => {
    return <div>
        <h1> GitHub Information for User: {props.userName} </h1>
        <ForkedRepoList userName={props.userName}/>
        <PullRequestList userName={props.userName}/>
        <label htmlFor="SearchAnotherUser"/>
        <Button variant="primary" onClick={props.toggleSearchView}>Search New User</Button>
    </div>
};

export default ResultView;