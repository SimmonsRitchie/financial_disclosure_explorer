import React, { useState, useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import { SearchResultsContext } from "../context/SearchResultsContext";
import { useDebounce } from "../hooks/debounce";

const SearchBarQuick = () => {
  const { addSearchText } = useContext(SearchContext);
  const { updateSearchResults, loadAllResults } = useContext(SearchResultsContext);
  const [text, setText] = useState("");

  // state for debounce
  // Debounce search term so that it only gives us latest value ...
  // ... if searchTerm has not been updated within last 100ms.
  // The goal is to only have the API call fire when user stops typing ...
  // ... so that we aren't hitting our API rapidly.
  const debouncedSearchTerm = useDebounce(text, 100);

  const handleChange = e => {
    const searchText = e.target.value;
    setText(searchText);
  };

  // Effect for API call
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        updateSearchResults(debouncedSearchTerm);
        addSearchText(debouncedSearchTerm);
      } else {
        loadAllResults()
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  );

  return (
    <p className="control">
      <input
        className="input is-rounded"
        type="text"
        onChange={handleChange}
        value={text}
        placeholder={
          "Enter name of official, institution, or keyword. Eg. 'thomas wolf'"
        }
      />
    </p>
  );
};

export default SearchBarQuick;
