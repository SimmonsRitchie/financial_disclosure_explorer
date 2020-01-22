import React, { useContext, useState, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import SearchResultsItem from "./SearchResultsItem";
import { applySearchTerms } from "../utils/search";
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

const ITEMS_PER_PAGE = 3

const SearchResults = props => {
  // TODO: Fix pagination
  const { searchText } = useContext(SearchContext);
  const [currentPage, setCurrentPage] = useState(1)
  const filteredData = applySearchTerms(searchText, props.data);
  const offset = (currentPage - 1) * ITEMS_PER_PAGE
  const endOffset = offset + ITEMS_PER_PAGE
  const slicedData = filteredData.slice(offset, endOffset)
  const onChange = (page) => {
    console.log(page);
    setCurrentPage(page)
  }
  useEffect(() => {
    setCurrentPage(1)
  },[searchText])
  return (
    <section>
      <h2 className="subtitle">
        Found: <strong>{filteredData.length}</strong> statements of financial
        interest
      </h2>
      <h2 className="subtitle">
      Displaying: <strong>{slicedData.length}</strong>
    </h2>
      <div className="container">
        {slicedData.map((item, idx) => {
          return <SearchResultsItem key={idx} item={item} />;
        })}
      </div>
      <Pagination onChange={onChange} pageSize={ITEMS_PER_PAGE} current={currentPage} total={filteredData.length} />
    </section>
  );
};

export default SearchResults;
