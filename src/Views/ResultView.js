import React, {useState, useEffect} from "react";
import Button from "react-bootstrap/Button";
import ForkedRepoList from "../Components/ForkedRepoList";
import PullRequestList from "../Components/PullRequestList";
import {LoadingMessage, ErrMessage} from "../Components/Messages";
import {BASE_URL} from "../Components/Consts";

const ResultView = ({userName, toggleSearchView}) => {
    const [apiData,setApiData] = useState(
        {
            forkedRepoListData:[],
            pullRequestListData:[],
            isLoading:true,
            isError:false
        }
    );

    useEffect(() => {
        const getEventsData = () => {
            return fetch(`${BASE_URL}/${userName}/events`)
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
                            pullRequestListData:pullRequestListData,
                            isLoading:false
                        }
                    })
                    .then(data => setApiData(data))
                    .catch(error => setApiData(
                        {
                            isLoading:false,
                            isError:true
                        }
                    ));       
        };
        getEventsData();
    },[userName]);

    return <div>
        <h1> GitHub Information for {userName} </h1>
        { apiData.isLoading ? <LoadingMessage msg="User data is loading ..." /> :
            apiData.isError ? <ErrMessage msg="Could not fetch user data" /> :
            <div>
                <ForkedRepoList data={apiData.forkedRepoListData}/>
                <PullRequestList data={apiData.pullRequestListData}/>
                <label htmlFor="SearchAnotherUser"/>
                <Button variant="primary" onClick={toggleSearchView}>Search New User</Button>
            </div>
        } 
    </div>
};

export default ResultView;