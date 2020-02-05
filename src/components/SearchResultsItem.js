import React, {useState} from "react";
import SearchResultsItemInspect from "./SearchResultsItemInspect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import {htmlEscape} from "../utils/escape"
import reactStringReplace from "react-string-replace"

//TODO: Add react-string-replace to highlight matching text

const SearchResultsItem = (props) => {
  const { 
    q01_first_name,
    q01_middle_name,
    q01_last_name,
    q04_public_position,
    q07_filing_year,
    snippet
  } = props.item;

  const upArrow = <FontAwesomeIcon icon={faChevronUp} size="lg"/>
  const downArrow = <FontAwesomeIcon icon={faChevronDown} size="lg"/>
  const [expand, setExpand] = useState(false)
  const [expandText, setExpandText] = useState(downArrow)
  const snippetEsc = htmlEscape(snippet)
  // We highlight the matching words because we know they'll begin with 'b4de2a49c8' and end with '8c94a2ed4b'
  // we also replace these terms in the text itself because sometimes a snippet contains more than one match but
  // one part is cut off.
  const snippetReplace = reactStringReplace(snippetEsc, /b4de2a49c8(.*)8c94a2ed4b/gi, (match, i) => (
    <span key={i} style={{ color: 'red' }}>{match.replace(/b4de2a49c8|8c94a2ed4b/gi,"")}</span>));
  const highlight = snippetEsc ? snippetReplace : null;

  const handleClick = () => {
    setExpand(!expand)

    const newExpandText = expand ? downArrow : upArrow
    setExpandText(newExpandText)
  }



  return (
      <div className="box" >
      <div className="results-item__container-header" onClick={handleClick}>
        <div>
          <div className="has-text-weight-bold is-size-5">{q01_first_name} {q01_middle_name && `${q01_middle_name[0]}.`} {q01_last_name}</div>
          <div className="is-size-6">Filing year: {q07_filing_year}, Filing as: {q04_public_position}</div>
          {highlight && <div className="results-item__preview" ><span className="is-size-6 is-italic">...{highlight}...</span></div>}
        </div>
        <div >{expandText}</div>
      </div>
        {expand && <SearchResultsItemInspect item={props.item} />}
      </div>
  );
};

export default SearchResultsItem;
