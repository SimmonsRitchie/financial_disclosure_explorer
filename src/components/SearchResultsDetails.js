import React from "react";

const SearchResultsDetails = ({itemsOnPage, totalItems}) => {
  return (
    <div className="level">
      <div className="level-item">
        <h2 className="is-size-6 has-text-centered">
          Displaying: <strong>{itemsOnPage}</strong> of{" "}
          <strong>{totalItems}</strong> results
        </h2>
      </div>
    </div>
  );
};

export default SearchResultsDetails;
