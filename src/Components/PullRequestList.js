import React from "react";
import PullRequestListItem from "./PullRequestListItem";
import {ErrMessage} from "./Messages";

const PullRequestList = ({data}) => {
    return <div>
        <h3>Most recent pull requests</h3>
            <div className="card mb-5">
                { data.length ? 
                        data.map((item,index) => <PullRequestListItem 
                        key={`PullRequestListItem-${index}`} 
                        title={item.title} 
                        htmlUrl={item.html_url} 
                        status={item.status}/>)
                        :   
                        <ErrMessage msg="No Recent Pull Requests Found"/>
                }
            </div>
        </div>
};

export default PullRequestList;