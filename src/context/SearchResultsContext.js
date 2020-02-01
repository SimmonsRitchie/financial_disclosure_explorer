import React, { createContext, useState } from "react";

export const SearchResultsContext = createContext();
import { applySearchTerms } from "../utils/search";

const SearchResultsContextProvider = (props) => {
  const [results, setResults] = useState(props.data)

  const updateSearchResults = (searchText) => {
    const filteredData = applySearchTerms(searchText, props.data);
    setResults(filteredData)
  }

  const updateSearchResultsAdvanced = (searchArray) => {
    console.log(searchArray)
  }

  return (
  <SearchResultsContext.Provider value={{results, updateSearchResults, updateSearchResultsAdvanced}}>
    {props.children}
  </SearchResultsContext.Provider>);
};

export default SearchResultsContextProvider;
