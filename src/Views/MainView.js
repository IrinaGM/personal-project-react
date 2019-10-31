import React, { useState } from "react";
import ResultView from "./ResultView";
import SearchView from "./SearchView";

const MainView = () => {
   const [searchData,setSearchData] = useState({
      isSearchView:true,
      userName:''
   });

   const toggleSearchView = (userName) => {
      setSearchData({
         isSearchView:!searchData.isSearchView,
         userName: userName
      });
   };

   return searchData.isSearchView ? <SearchView toggleSearchView={toggleSearchView}/> 
                                 : <ResultView toggleSearchView={toggleSearchView} userName={searchData.userName}/>;
                     
};

export default MainView;