import React, { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import SearchResultsItem from "./SearchResultsItem";

const applySearchTerms = (searchText, searchData) => {
  return searchData.filter(item => {
    const fullname =
      item.q01_first_name +
      " " +
      item.q01_middle_initial +
      " " +
      item.q01_last_name;
    const regex = new RegExp(searchText, "gi");
    return fullname.match(regex);
  });
};

const SearchResults = props => {
  const { searchText } = useContext(SearchContext);
  const filteredData = applySearchTerms(searchText, props.data);
  return (
    <section>
    <h2 className="subtitle">Showing <strong>{filteredData.length}</strong> forms</h2>
      <div className="container">
        {filteredData.map((item, idx) => {
          return <SearchResultsItem key={idx} item={item} />;
        })}
      </div>
    </section>
  );
};

export default SearchResults;
