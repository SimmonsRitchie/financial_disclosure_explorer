import React, { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import SearchResultsItem from "./SearchResultsItem";
import {applySearchTerms} from "../utils/search"


const SearchResults = props => {
  const { searchText } = useContext(SearchContext);
  const filteredData = applySearchTerms(searchText, props.data);
  return (
    <section>
      <h2 className="subtitle">
        Found: <strong>{filteredData.length}</strong> statements of financial interest
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
