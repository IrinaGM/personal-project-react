import React, { useState, useEffect } from "react";
import ResultView from "./ResultView";
import SearchView from "./SearchView";



const MainView = () => {
   const [isSearchView,setSearchView] = useState(true);

   const toggleSearchViewFalse = () => {
    setSearchView(false);
   };

   const toggleSearchViewTrue = () => {
      setSearchView(true);
     };

   return isSearchView ? <SearchView toggleSearchView={toggleSearchViewFalse}/> : <ResultView toggleSearchView={toggleSearchViewTrue}/>;
};

export default MainView;