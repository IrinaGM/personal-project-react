import React from "react";
import Badge from 'react-bootstrap/Badge'

const PullRequestListItemStatus = ({status}) => {

    const setVariant = (status) => {
        switch (status) {
            case "open" : return "success"
            case "closed" : return "primary"
            default: return "warning"
        };
    };

    return <Badge pill variant={setVariant(status)}>
                {status}
            </Badge>

 
};

export default PullRequestListItemStatus;