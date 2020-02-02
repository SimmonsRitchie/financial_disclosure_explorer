import React, { createContext, useState } from "react";

export const SearchResultsContext = createContext();
import { applySearchTerms } from "../utils/search";
import {naturalSort} from "../utils/sort"

const SearchResultsContextProvider = (props) => {
  const [results, setResults] = useState(props.data)

  const updateSearchResults = (searchText) => {
    //TODO: Connect with backend
    const filteredData = applySearchTerms(searchText, props.data);
    setResults(filteredData)
  }

  const updateSearchResultsAdvanced = (searchArray) => {
    //TODO: Connect with backend
  }

  const getUniqueFieldVals = (field) => {
    const arr = props.data.map(item => item[field])
    const sortedArr = naturalSort(arr)
    return [...new Set(sortedArr)]
  }

  return (
  <SearchResultsContext.Provider value={{results, updateSearchResults, updateSearchResultsAdvanced, getUniqueFieldVals}}>
    {props.children}
  </SearchResultsContext.Provider>);
};

export default SearchResultsContextProvider;
