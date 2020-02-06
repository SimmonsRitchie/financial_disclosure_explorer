import { SEARCH_FIELDS } from "../config/fields";

// Get all the search fields we want to search
let formattedSearchFields = SEARCH_FIELDS.map(
  item => `extracted.${item.value}`
);
formattedSearchFields = formattedSearchFields.join(", ");

// API URL
const API_URL = process.env.DATASETTE_URL;

export const quickSearchUrl = searchValue => {
  // Embed the SQL query in a multi-line backtick string:
  const sql = `select
  extracted.rowid, snippet(extracted_fts, -1, 'b4de2a49c8', '8c94a2ed4b', '...', 100) as snippet,
  extracted_fts.rank, ${formattedSearchFields}
from extracted
  join extracted_fts on extracted.rowid = extracted_fts.rowid
where extracted_fts match escape_fts(:search) || "*"
  order by rank`;

  console.log(sql);

  // Construct the API URL, using encodeURIComponent() for the parameters
  const url =
    API_URL +
    "sfi.json?sql=" +
    encodeURIComponent(sql) +
    `&search=${encodeURIComponent(searchValue)}&_shape=array`;

  console.log(url);
  return url;
};

export const advancedSearchUrl = searchArray => {
  /* [
  {field: "q01_last_name", condition: "contains", keywords: "sdfsdf", inputType: "text", id: "3aa223b0-4866-11ea-bc68-db580eb89c80"}
  {field: "q02_city", condition: "contains", keywords: "sdfsdf", inputType: "text", id: "3bc2fd00-4866-11ea-bc68-db580eb89c80"}
  {field: "q02_city", condition: "contains", keywords: "sdfsdf", inputType: "text", id: "3c5b9380-4866-11ea-bc68-db580eb89c80"}
  ]
 */
  console.log(searchArray)
  let whereStatement = ""
  let params = ""
  searchArray.forEach((item, idx) => {
    let sqlCondition
    switch(item.condition) {
      case 'contains':
        sqlCondition = 'like'
        break;
      case 'excludes':
        sqlCondition = 'not in'
    }
    whereStatement = whereStatement + ` "${item.field}" ${sqlCondition} :p${idx}`
    params = params + `&p${idx}=` + encodeURIComponent(`%${item.keywords}%`)
    if (idx + 1 < searchArray.length ) {
      whereStatement = `${whereStatement} and`
    }
  });

  //select rowid, * from extracted where  q01_first_name like sefd

  // Construct sql
  const sql = `select * from extracted where${whereStatement}`
  console.log(sql)

  // Construct the API URL, using encodeURIComponent() for the parameters
  const url =
    API_URL + "sfi.json?sql=" + encodeURIComponent(sql) + params + `&_shape=array`;

  console.log(url);
  return url;
};

export const allRowsUrl = () => {
  // Embed the SQL query in a multi-line backtick string:
  const sql = `select rowid, * from extracted order by rowid`;
  console.log(sql);

  // Construct the API URL, using encodeURIComponent() for the parameters
  const url =
    API_URL + "sfi.json?sql=" + encodeURIComponent(sql) + `&_shape=array`;

  console.log(url);
  return url;
};

// Used to avoid race-conditions:
let requestInFlight = null;

export const datasetteFetch = url => {
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
      return d;
    });
};
