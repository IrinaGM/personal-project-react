import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import {BASE_URL} from "../Components/Consts"


const SearchView = (props) => {
    const [userName,setUserName] = useState('');
    const [errMsg,setErrMsg] = useState('');

    const hangdleSearch = () => {
        fetch(`${BASE_URL}/${userName}`)
            .then(response => response.json())
            .then(user => user.message ? setErrMsg(user.message) : props.toggleSearchView(user.login))
            .catch(error => setErrMsg(error.message)); 
    };

  return <div>
        <h1> GitHub Stats Search </h1>
        <input className="mb-2 mt-2 w-50"  id="userNameInput" type="text" onChange={event => setUserName(event.target.value)}></input><br/>
        <Button variant="primary" onClick={hangdleSearch}>Search</Button>
        {errMsg ? <p> User {errMsg} </p> : ''}
    </div>
};

export default SearchView;