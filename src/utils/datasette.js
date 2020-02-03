import { SEARCH_FIELDS } from "../config/searchSettings";
import { debounce } from "./debounce";

  // Get all the search fields we want to search
  let formattedSearchFields = SEARCH_FIELDS.map(
    item => `extracted.${item.value}`
  );
  formattedSearchFields = formattedSearchFields.join(", ");

export const quickSearchUrl = (searchValue) => {
  // Embed the SQL query in a multi-line backtick string:
  const sql = `select
  extracted.rowid, snippet(extracted_fts, -1, 'b4de2a49c8', '8c94a2ed4b', '...', 100) as snippet,
  extracted_fts.rank, ${formattedSearchFields}
from extracted
  join extracted_fts on extracted.rowid = extracted_fts.rowid
where extracted_fts match :search || "*"
  order by rank`;

  console.log(sql);

  // Construct the API URL, using encodeURIComponent() for the parameters
  const url =
    "https://sfi-explorer.herokuapp.com/sfi.json?sql=" +
    encodeURIComponent(sql) +
    `&search=${encodeURIComponent(searchValue)}&_shape=array`;

  console.log(url);
  return url
};

export const allRowsUrl = () => {
  // Embed the SQL query in a multi-line backtick string:
  const sql = `select rowid, * from extracted order by rowid`;
  console.log(sql);

  // Construct the API URL, using encodeURIComponent() for the parameters
  const url =
    "https://sfi-explorer.herokuapp.com/sfi.json?sql=" +
    encodeURIComponent(sql) + `&_shape=array`;

  console.log(url);
  return url
};


export const datasetteFetch = (url) => {
  // Used to avoid race-conditions:
  let requestInFlight = null;

  // Unique object used just for race-condition comparison
  let currentRequest = {};
  requestInFlight = currentRequest;
  return fetch(url)
    .then(r => r.json())
    .catch(r => console.log(r))
    .then(d => {
      if (requestInFlight !== currentRequest) {
        // Avoid race conditions where a slow request returns
        // after a faster one.
        return;
      }
      console.log(d);
      return d;
    });
};
