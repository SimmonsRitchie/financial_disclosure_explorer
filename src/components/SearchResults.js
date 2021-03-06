import React, { useContext, useState, useEffect, Component } from "react";
import { SearchContext } from "../context/SearchContext";
import SearchResultsItem from "./SearchResultsItem";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import { SearchResultsContext } from "../context/SearchResultsContext";
import SearchResultsDetails from "./SearchResultsDetails";

const ITEMS_PER_PAGE = 10;

const SearchResults = (props) => {
  //get context + set state
  const { searchText } = useContext(SearchContext);
  const { results } = useContext(SearchResultsContext);
  const [currentPage, setCurrentPage] = useState(1);

  // handle pagination
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const endOffset = offset + ITEMS_PER_PAGE;
  const slicedData = results && results.length ? results.slice(offset, endOffset) : []
  const onChange = page => {
    setCurrentPage(page);
  };
  useEffect(() => {
    // Returns current page to page 1 if search results change
    setCurrentPage(1);
  }, [searchText]);
  return (
    <section className="container__section">
      <SearchResultsDetails itemsOnPage={slicedData.length} totalItems={results ? results.length : 0}/>
      <div className="container">
        {slicedData.length ? slicedData.map((item) => {
          return <SearchResultsItem key={item.meta_id} item={item} />;
        }) : <div>No records to display</div>}
      </div>
      <section className="section">
        <div className="container">
          <Pagination
          showSizeChanger={true}
          onChange={onChange}
          pageSize={ITEMS_PER_PAGE}
          current={currentPage}
          total={results.length}
      />
        </div>
      </section>
    </section>
  );
};

export default SearchResults;
