import React from "react";
import { DISPLAY_FIELDS } from "../config/fields";

const ExtractedText = ({ item }) => {
  console.log("ITEM", item);
  console.log(DISPLAY_FIELDS);

  return (
    <table className="table is-fullwidth">
      <tbody>
        {DISPLAY_FIELDS.map(field => (
          <tr key={field.value}>
            <td><span className="has-text-black-bis">{field.display_name}</span></td>
            <td><span className="has-text-grey">{item[field.value]}</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExtractedText;
