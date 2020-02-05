import React from "react";
import { DISPLAY_FIELDS } from "../config/fields";

const ExtractedText = ({ item }) => {
  console.log("ITEM", item);
  console.log(DISPLAY_FIELDS);

  return (
    <div className="extracted-text__container">
        {DISPLAY_FIELDS.map(field => (
          <div className="extracted-text__flex-grid" key={field.value}>
            <div className="extracted-text__col-field"><span className="has-text-grey has-text-weight-bold">{field.display_name}</span></div>
            <div className="extracted-text__col-item">{item[field.value] ? <span className="has-text-grey-dark">{item[field.value]}</span> : <span className="has-text-grey-light">No data</span>}</div>
          </div>
        ))}
    </div>
  );
};

export default ExtractedText;
