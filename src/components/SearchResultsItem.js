import React, {useState} from "react";
import SearchResultsItemInspect from "./SearchResultsItemInspect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'


const SearchResultsItem = (props) => {
  const { 
    q01_first_name,
    q01_middle_initial,
    q01_last_name,
    q04_public_position,
    meta_filing_year,
  } = props.item;

  const upArrow = <FontAwesomeIcon icon={faChevronUp} size="lg"/>
  const downArrow = <FontAwesomeIcon icon={faChevronDown} size="lg"/>
  const [expand, setExpand] = useState(false)
  const [expandText, setExpandText] = useState(downArrow)

  const handleClick = () => {
    setExpand(!expand)

    const newExpandText = expand ? downArrow : upArrow
    setExpandText(newExpandText)

  }

  return (
      <div className="box" >
      <div className="results-item__container-header">
        <div className="results-item__container-basic-details">
          <h2 className="title is-size-5">{q01_first_name} {q01_middle_initial}. {q01_last_name}</h2>
          <h3 className="subtitle is-size-6">Filing year: {meta_filing_year}, Filing as: {q04_public_position}</h3>
        </div>
        <div onClick={handleClick}>{expandText}</div>
      </div>
        {expand && <SearchResultsItemInspect item={props.item} />}
      </div>
  );
};

export default SearchResultsItem;
