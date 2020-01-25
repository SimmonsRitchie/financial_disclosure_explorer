import React, {useState} from "react";
import SearchResultsItemInspect from "./SearchResultsItemInspect";

const SearchResultsItem = props => {
  const { 
    q01_first_name,
    q01_middle_initial,
    q01_last_name,
    q04_public_position,
    meta_filing_year,
  } = props.item;

  const [expand, setExpand] = useState(false)

  const handleClick = () => {
    setExpand(!expand)

  }

  return (
      <div className="box" >
      <div className="results-item__container-header">
        <div className="results-item__container-basic-details">
          <h2 className="title is-size-5">{q01_first_name} {q01_middle_initial}. {q01_last_name}</h2>
          <h3 className="subtitle is-size-6">Filing year: {meta_filing_year}, Filing as: {q04_public_position}</h3>
        </div>
        <button onClick={handleClick}>EXPAND</button>
      </div>
        {expand && <SearchResultsItemInspect />}
      </div>
  );
};

export default SearchResultsItem;
