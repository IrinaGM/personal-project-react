import React, { useState ,useEffect} from "react";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import data from "../sample-data/api-data-example-users.json";


// renders the full page
const SearchView = (props) => {
    const [userName,setUserName] = useState('NewUserName');

    const doesUserExist = (userName) => {
        const GITHUB_USER_SEARCH_URL = data;
        
    };

    return (<div>
        <h1> GitHub Stats Search </h1>
        <input id="userNameInput" type="text" onChange={event => setUserName(event.target.value)}></input>
        <Button variant="primary" onClick={props.toggleSearchView}>Search</Button>
    </div>)
};


export default SearchView;


// <label htmlFor="UserName"/>
// <InputGroup className="mb-3">
//     <InputGroup.Prepend>
//         <InputGroup.Text id="basic-addon1" value={input} onInput={(newInput) => setInput(newInput)}>GitHub User Name</InputGroup.Text>
//     </InputGroup.Prepend>
//     <FormControl
//         id="UserName"
//         aria-label="Username"
//         aria-describedby="basic-addon1"
//     />
// </InputGroup>