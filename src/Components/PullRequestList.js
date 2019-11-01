import React, {useState,useEffect} from "react";
import PullRequestListItem from "./PullRequestListItem";
import {BASE_URL} from "./Consts";

const PullRequestList = ({userName}) => {
    const [apiData,setApiData] = useState(
        {
            data: [],
            isLoading: true
        }
    );

    useEffect(() => {
        const getPullRequestItems = () => {
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
                    .then(data => setApiData(
                            {
                                data: data,
                                isLoading:false
                            }))
                    .catch(error => console.log(
                        {
                        data: error,
                        isLoading: false
                    }));
        };
        getPullRequestItems();
    },[userName]);

    
    return <div>
        <h3>Most recent pull requests by the user:</h3>
            <div className="card mb-5">
                {
                    apiData.isLoading ? <p> Loading... </p> 
                                    : apiData.data.length ? apiData.data
                                    .map(item => <PullRequestListItem 
                                        key={"PullRequestListItem"+apiData.data.indexOf(item)} 
                                        title={item.title} 
                                        htmlUrl={item.html_url} 
                                        status={item.status}/>)
                                                        : <p> No Pull Requests Found </p>
                }
            </div>
        </div>
};

export default PullRequestList;