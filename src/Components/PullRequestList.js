import React, {useState,useEffect} from "react";
import PullRequestListItem from "./PullRequestListItem";
import {BASE_URL} from "./Consts"

const PullRequestList = ({userName}) => {
    const [apiData,setApiData] = useState([]);

    useEffect(() => {
        const getPullRequestItem = () => {
            return fetch(`${BASE_URL}/${userName}/events`)
                    .then(response => response.json())
                    .then(data => data
                        .filter(pullEvent => pullEvent.type === "PullRequestEvent")
                        .map(pullEvent => 
                                ({
                                title: pullEvent.payload.pull_request.title,
                                html_url: pullEvent.payload.pull_request.html_url,
                                status: pullEvent.payload.pull_request.state
                                })   
                            )
                        )
                    .then(data => setApiData(data))
                    .catch(error => console.log(error));
        };
        getPullRequestItem();
    },[userName]);

    
    return <div>
        <h3>Most recent pull requests by the user:</h3>
        <div className="card mb-5">
            {apiData.length ? 
            apiData.map(item => <PullRequestListItem key={apiData.indexOf(item)} title={item.title} htmlUrl={item.html_url} status={item.status}/>)
        : <p> No Pull Requests Found </p>}
        </div>
            
        </div>
};

export default PullRequestList;