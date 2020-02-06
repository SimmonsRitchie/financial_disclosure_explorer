import React, { createContext, useState } from "react";
import { naturalSort } from "../utils/sort";
import {
  datasetteFetch,
  quickSearchUrl,
  advancedSearchUrl
} from "../utils/datasette";
import { cleanText } from "../utils/clean";

export const SearchResultsContext = createContext();

const SearchResultsContextProvider = props => {
  const [results, setResults] = useState(props.data);

  const loadAllResults = () => {
    setResults(props.data);
  };

  const handleQuickSearch = searchText => {
    if (!searchText) {
      loadAllResults();
    } else {
      const cleanSearchText = cleanText(searchText); //remove chars that might cause trouble
      const url = quickSearchUrl(cleanSearchText);
      updateSearchResults(url);
    }
  };

  const handleAdvancedSearch = searchArray => {
    if (searchArray.length === 0) {
      loadAllResults();
    } else {
      const url = advancedSearchUrl(searchArray);
      updateSearchResults(url);
    }
  };

  const updateSearchResults = url => {
    datasetteFetch(url).then(fetchedData => {
      if (!fetchedData) {
        return;
      }
      console.log("FETCHED DATA:", fetchedData);
      setResults(fetchedData);
    });
  };

  const getUniqueFieldVals = field => {
    const arr = props.data.map(item => item[field]);
    const sortedArr = naturalSort(arr);
    return [null, ...new Set(sortedArr)];
  };

  return (
    <SearchResultsContext.Provider
      value={{
        results,
        handleQuickSearch,
        handleAdvancedSearch,
        getUniqueFieldVals,
        loadAllResults
      }}
    >
      {props.children}
    </SearchResultsContext.Provider>
  );
};

export default SearchResultsContextProvider;
