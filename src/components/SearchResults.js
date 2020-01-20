import React, { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import SearchResultsItem from "./SearchResultsItem";

const applySearchTerms = (searchText, searchData) => {
  if (searchText === "") {
    return searchData;
  } else {
    return searchData.filter(item => {
      // get all item fields
      const searchFields = Object.keys(item);
      // split search terms up if white space present
      const searchTextChunks = searchText.split(" ")
      for (const field of searchFields) {
        const chunkMatchCount = 0
        for (const chunk of searchTextChunks) {
          const regex = new RegExp(chunk, "gi");
          if (item[field].match(regex)) {
            chunkMatchCount += 1
          }
        }
        if (chunkMatchCount === searchTextChunks.length) {
          return item
        }
      }
    });
  }
};

const SearchResults = props => {
  const { searchText } = useContext(SearchContext);
  const filteredData = applySearchTerms(searchText, props.data);
  return (
    <section>
      <h2 className="subtitle">
        Showing <strong>{filteredData.length}</strong> forms
      </h2>
      <div className="container">
        {filteredData.map((item, idx) => {
          return <SearchResultsItem key={idx} item={item} />;
        })}
      </div>
    </section>
  );
};

export default SearchResults;
