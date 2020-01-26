import React, { useContext, useState, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import SearchResultsItem from "./SearchResultsItem";
import { applySearchTerms } from "../utils/search";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import { SearchResultsContext } from "../context/SearchResultsContext";

const ITEMS_PER_PAGE = 10;

const SearchResults = (props) => {
  //get context + set state
  const { searchText } = useContext(SearchContext);
  const { results } = useContext(SearchResultsContext);
  const [currentPage, setCurrentPage] = useState(1);

  // handle pagination
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const endOffset = offset + ITEMS_PER_PAGE;
  const slicedData = results.slice(offset, endOffset);
  const onChange = page => {
    setCurrentPage(page);
  };
  useEffect(() => {
    setCurrentPage(1);
  }, [searchText]);
  return (
    <section>
        <div className="container">
          <div className="content">
            <h2 className="is-size-6 has-text-centered">
              Displaying: <strong>{slicedData.length}</strong> of{" "}
              <strong>{results.length}</strong> results
            </h2>
          </div>
        </div>
      <div className="container">
        {slicedData.map((item, idx) => {
          return <SearchResultsItem key={item.meta_id} item={item} />;
        })}
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
