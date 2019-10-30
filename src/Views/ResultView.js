import React from "react";
import Button from 'react-bootstrap/Button';

const ResultView = (props) => {
    return (<div>
        <h1>This is the Results View</h1>
        <label htmlFor="SearchAnotherUser"/>
        <Button variant="primary" onClick={props.toggleSearchView}>Search New User</Button>
    </div>)
};

export default ResultView;