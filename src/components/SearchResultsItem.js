import React, {useState} from "react";
import SearchResultsItemInspect from "./SearchResultsItemInspect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import {htmlEscape} from "../utils/escape"

//TODO: Add react-string-replace to highlight matching text

const SearchResultsItem = (props) => {
  const { 
    q01_first_name,
    q01_middle_name,
    q01_last_name,
    q04_public_position,
    meta_filing_year,
    snippet
  } = props.item;

  const upArrow = <FontAwesomeIcon icon={faChevronUp} size="lg"/>
  const downArrow = <FontAwesomeIcon icon={faChevronDown} size="lg"/>
  const [expand, setExpand] = useState(false)
  const [expandText, setExpandText] = useState(downArrow)
  const highlight = htmlEscape(snippet).replace(
    /b4de2a49c8/g, '<b>'
  ).replace(
    /8c94a2ed4b/g, '</b>'
  );

  const handleClick = () => {
    setExpand(!expand)

    const newExpandText = expand ? downArrow : upArrow
    setExpandText(newExpandText)
  }



  return (
      <div className="box" >
      <div className="results-item__container-header" onClick={handleClick}>
        <div className="results-item__container-basic-details">
          <h2 className="title is-size-5">{q01_first_name} {q01_middle_name && `${q01_middle_name[0]}.`} {q01_last_name}</h2>
          <h3 className="subtitle is-size-6">Filing year: {meta_filing_year}, Filing as: {q04_public_position}</h3>
          {highlight && <span className="is-italic">...{highlight}...</span>}
        </div>
        <div >{expandText}</div>
      </div>
        {expand && <SearchResultsItemInspect item={props.item} />}
      </div>
  );
};

export default SearchResultsItem;
