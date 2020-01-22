import React from "react";

const SearchResultsItem = props => {
  const { 
    q01_first_name,
    q01_middle_initial,
    q01_last_name,
    q04_public_position,
    meta_filing_year,
  } = props.item;
  return (
      <div className="box">
        <h2 className="title is-size-5">{q01_first_name} {q01_middle_initial}. {q01_last_name}</h2>
        <h3 className="subtitle is-size-6">Filing year: {meta_filing_year}, Filing as: {q04_public_position}</h3>
      </div>
  );
};

export default SearchResultsItem;
