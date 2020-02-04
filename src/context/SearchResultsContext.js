import React, { createContext, useState } from "react";
import { applySearchTerms } from "../utils/search";
import { naturalSort } from "../utils/sort";
import { datasetteFetch, quickSearchUrl } from "../utils/datasette";
export const SearchResultsContext = createContext();

const SearchResultsContextProvider = props => {
  const [results, setResults] = useState(props.data);

  const loadAllResults = () => {
    setResults(props.data);
  }

  const updateSearchResults = (searchText) => {
    if (!searchText) {
      loadAllResults();
    } else {
      // remove chars that will cause sql errors
      const cleanSearchText = searchText.trim().replace(/[^a-zA-Z0-9 ]/g, "");
      const url = quickSearchUrl(cleanSearchText);
      datasetteFetch(url).then(fetchedData => {
        if (!fetchedData) {
          return;
        }
        console.log("FETCHED DATA:", fetchedData);
        setResults(fetchedData);
      });
    }
  };

  const updateSearchResultsAdvanced = (searchArray) => {
    //TODO: Connect with backend
  };

  const getUniqueFieldVals = field => {
    const arr = props.data.map(item => item[field]);
    const sortedArr = naturalSort(arr);
    return [...new Set(sortedArr)];
  };

  return (
    <SearchResultsContext.Provider
      value={{
        results,
        updateSearchResults,
        updateSearchResultsAdvanced,
        getUniqueFieldVals,
        loadAllResults
      }}
    >
      {props.children}
    </SearchResultsContext.Provider>
  );
};

export default SearchResultsContextProvider;
