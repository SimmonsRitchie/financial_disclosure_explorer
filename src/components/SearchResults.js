import React, { useContext, useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { SearchContext } from "../context/SearchContext";
import SearchResultsItem from "./SearchResultsItem";
import { applySearchTerms } from "../utils/search";

const ITEMS_PER_PAGE = 10

const SearchResults = props => {
  // TODO: Fix pagination
  const { searchText } = useContext(SearchContext);
  const [offset, setOffset] = useState(1)
  useEffect(() => {
    console.log('search text changed!')
    console.log(maxPages)
  },[searchText])
  const filteredData = applySearchTerms(searchText, props.data);
  const maxPages = filteredData.length / ITEMS_PER_PAGE
  const handlePageClick = data => {
    console.log("selected page: " + data.selected)
    setOffset(data.selected * ITEMS_PER_PAGE)
  };
  useEffect(() => {
    console.log('search text changed!')
    setOffset(0)
  },[searchText])
  const endOffset = offset + ITEMS_PER_PAGE
  const slicedData = filteredData.slice(offset, endOffset)

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
      <ReactPaginate
        previousLabel={"previous"}
        forcePage={offset + 1}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={maxPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </section>
  );
};

export default SearchResults;
