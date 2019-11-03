import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import {LoadingMessage, ErrMessage} from "../Components/Messages";
import {checkUser} from "../store/actions/searchActions";
import { useDispatch, useSelector } from 'react-redux';

const SearchView = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const isLoading = useSelector(state => state.userSearchReducer.isLoading);
    const errMsg = useSelector(state => state.userSearchReducer.errMsg); 

   const handleKeyPress = event => {
       if(event.key === 'Enter') {
            dispatch(checkUser(input))
        }
    };

    const handleChange = event => {
        setInput(event.target.value)
    };

    const handleClick = () => {
        dispatch(checkUser(input))
    };

  return <div>
        <h1> GitHub Stats Search </h1>
        <input className="mb-2 mt-2 w-50"  id="userNameInput" type="text"
                onChange={handleChange}
                onKeyPress={handleKeyPress}></input><br/>
        <Button variant="primary" onClick={handleClick}>Search</Button>
        { isLoading ? <LoadingMessage msg="Searching for user ..." /> :
         errMsg ? <ErrMessage msg={`The following error has acurred: ${errMsg}`}/> : ''}
    </div>
};


export default SearchView;