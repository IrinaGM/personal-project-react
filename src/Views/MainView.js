import React, { useState } from "react";
import ResultView from "./ResultView";
import SearchView from "./SearchView";

const MainView = () => {
   const [isSearchView,setSearchView] = useState(true); // TODO: change to default true
   const [userName, setUserName] = useState(''); // TODO: change to default ''

   const toggleSearchView = (userName) => {
      setSearchView(!isSearchView);
      setUserName(userName);
   };

   return isSearchView ? <SearchView toggleSearchView={toggleSearchView}/> 
                       : <ResultView toggleSearchView={toggleSearchView} userName={userName}/>;
};

export default MainView;