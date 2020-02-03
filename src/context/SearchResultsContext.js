import React, { createContext, useState } from "react";
import { applySearchTerms } from "../utils/search";
import { naturalSort } from "../utils/sort";
import { datasetteFetch, quickSearchUrl } from "../utils/datasette";
import { debounce } from "../utils/debounce";
export const SearchResultsContext = createContext();

const SearchResultsContextProvider = props => {
  const [results, setResults] = useState(props.data);

  const updateSearchResults = searchText => {
    //TODO: Connect with backend
    // const filteredData = applySearchTerms(searchText, props.data); // local test version

    if (searchText === "") {
      setResults(props.data);
    } else {
      const url = quickSearchUrl(searchText);

      debounce(
        datasetteFetch(url).then(fetchedData => {
          if (!fetchedData) {
            return;``
          }
          console.log("FETCHED DATA:", fetchedData);
          setResults(fetchedData);
        }),
        100
      );
    }
  };

  const updateSearchResultsAdvanced = searchArray => {
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
        getUniqueFieldVals
      }}
    >
      {props.children}
    </SearchResultsContext.Provider>
  );
};

export default SearchResultsContextProvider;
