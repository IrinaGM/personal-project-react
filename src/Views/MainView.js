import React, { useState, useEffect } from "react";
import ResultView from "./ResultView";
import SearchView from "./SearchView";



const MainView = () => {
   const [isSearchView,setSearchView] = useState(true);

   const toggleSearchView = () => {
    setSearchView(false);
   };

   return isSearchView ? <SearchView toggleSearchView={toggleSearchView}/> : <ResultView/>;
};

export default MainView;