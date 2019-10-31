import React, {useState, useEffect} from "react";
import {BASE_URL} from "./Consts";
import ForkedRepoListItem from "./ForkedRepoListItem";

const ForkedRepoList = ({userName}) => {
    const [apiData,setApiData] = useState([]);

    useEffect(() => {
        const getForkedReposList = () => {
            return fetch(`${BASE_URL}/${userName}/events`)
                    .then(response => response.json())
                    .then(data => data
                        .filter(forkEvent => forkEvent.type === "ForkEvent")
                        .map(forkEvent => 
                                ({
                                title: forkEvent.payload.forkee.full_name,
                                html_url: forkEvent.payload.forkee.html_url,
                                forkedFrom: forkEvent.repo.name
                                })   
                            )
                        )
                    .then(data => setApiData(data))
                    .catch(error => console.log(error));
        };
        getForkedReposList();
    },[userName]);
    
    
    return <div> 
        <h3>Most resent repositories forked by the user:</h3>
        <div className="card mb-5">
            {apiData.length ? 
            apiData.map(item => <ForkedRepoListItem key={"ForkedRepoListItem"+apiData.indexOf(item)} title={item.title} htmlUrl={item.html_url} forkedFrom={item.forkedFrom}/>)
        : <p> No Forked Repositories Found </p>}
        </div>
    </div>
};

export default ForkedRepoList;