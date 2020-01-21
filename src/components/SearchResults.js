import React, { useContext, useState } from "react";
import ReactPaginate from "react-paginate";
import { SearchContext } from "../context/SearchContext";
import SearchResultsItem from "./SearchResultsItem";
import { applySearchTerms } from "../utils/search";

const ITEMS_PER_PAGE = 3

const SearchResults = props => {
  // TODO: Fix pagination
  const { searchText } = useContext(SearchContext);
  const [currentPage, setCurrentPage] = useState(1)
  const filteredData = applySearchTerms(searchText, props.data);
  const maxPages = filteredData.length / ITEMS_PER_PAGE
  const handlePageClick = data => {
    console.log("selected page: " + data.selected)
    setOffset(data.selected * ITEMS_PER_PAGE)
  };
  const endOffset = offset + ITEMS_PER_PAGE > filteredData.length ? offset + ITEMS_PER_PAGE : filteredData.length
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
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={maxPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </section>
  );
};

export default SearchResults;
