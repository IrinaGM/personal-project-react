import React from "react";
import ForkedRepoListItem from "./ForkedRepoListItem";
import {ErrMessage} from "./Messages";

const ForkedRepoList = ({data}) => {  
    return <div> 
        <h3>Most resent repositories forked</h3>
        <div className="card mb-5">
            { data.length ? 
                data.map((item,index) => <ForkedRepoListItem 
                key={`ForkedRepoListItem-${index}`} 
                title={item.title} 
                htmlUrl={item.html_url} 
                forkedFrom={item.forked_from}/>)
                            : 
                <ErrMessage msg="No Forked Repositories Found"/>
            }
        </div>
    </div>
};

export default ForkedRepoList;