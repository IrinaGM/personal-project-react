import React from "react";
import ResultView from "./ResultView";
import SearchView from "./SearchView";
import { useSelector } from 'react-redux';

const MainView = () => {
   const userFound = useSelector(state => state.userSearchReducer.userFound);

   return userFound ? <ResultView /> : <SearchView/>;
};

export default MainView;