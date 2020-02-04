import React from "react";
import { DISPLAY_FIELDS } from "../config/searchSettings";

const ExtractedText = ({ item }) => {
  console.log("ITEM", item);
  console.log(DISPLAY_FIELDS);

  return (
    <table className="table is-fullwidth">
      <tbody>
        {DISPLAY_FIELDS.map(field => (
          <tr key={field.value}>
            <td><strong>{field.display_name}</strong></td>
            <td>{item[field.value]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExtractedText;
