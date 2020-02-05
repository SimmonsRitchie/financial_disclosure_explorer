import React from "react";
import { DISPLAY_FIELDS } from "../config/fields";

const ExtractedText = ({ item }) => {
  console.log("ITEM", item);
  console.log(DISPLAY_FIELDS);

  return (
    <div>
        {DISPLAY_FIELDS.map(field => (
          <div key={field.value}>
            <div><span className="has-text-black-bis">{field.display_name}</span></div>
            <div><span className="has-text-grey">{item[field.value]}</span></div>
          </div>
        ))}
    </div>
  );
};

export default ExtractedText;
