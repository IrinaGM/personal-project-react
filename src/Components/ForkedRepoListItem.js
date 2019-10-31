import React from "react";
import ForkedRepoListItemParent from "./ForkedRepoListItemParent";

const ForkedRepoListItem = ({title,htmlUrl,forkedFrom}) => {
    return <div className="card-block pb-2 pt-2 border">
            <a href={htmlUrl} target="_blank" rel="noopener noreferrer">{title}</a><br/>
            <ForkedRepoListItemParent forkedFrom={forkedFrom}/>
        </div>
};

export default ForkedRepoListItem;