import React from "react";
import PullRequestListItemStatus from "./PullRequestListItemStatus";


const PullRequestListItem = ({title,htmlUrl,status}) => {
    return <div className="card-block pb-2 pt-2 border">
            <a href={htmlUrl} target="_blank" rel="noopener noreferrer">{title}</a><br/>
            <PullRequestListItemStatus status={status}/>
        </div>
};

export default PullRequestListItem;
