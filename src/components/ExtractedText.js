import React, {useContext} from "react";
import { DISPLAY_FIELDS } from "../config/fields";
import reactStringReplace from "react-string-replace"
import { SearchContext } from "../context/SearchContext";
import { cleanText } from "../utils/clean"

const ExtractedText = ({ item }) => {

  const { searchText } = useContext(SearchContext)
  const cleanSearchText = cleanText(searchText)

  return (
    <div className="extracted-text__container">
      {DISPLAY_FIELDS.map(field => {

        const displayVal = item[field.value] ? reactStringReplace(item[field.value], cleanSearchText, (match, i) => (
          <span key={i} style={{ color: 'red' }}>{match}</span>))
          : (
          <span className="has-text-grey-light">No data</span>
        )
        return (
          <div className="extracted-text__flex-grid" key={field.value}>
            <div className="extracted-text__col-field">
              <span className="has-text-grey has-text-weight-bold">
                {field.display_name}
              </span>
            </div>
            <div className="extracted-text__col-item">
              {displayVal}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExtractedText;
