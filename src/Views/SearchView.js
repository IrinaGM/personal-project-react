import React from "react";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


const SearchView = (props) => {
    return <div>
    <h1> GitHub Stats Search </h1>
        <label htmlFor="UserName"></label>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">GitHub User Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    id="UserName"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
        <Button variant="primary" onClick={props.toggleSearchView}>Primary</Button>
    </div>
};

export default SearchView;

