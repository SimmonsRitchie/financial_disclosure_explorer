import {datasetteFetch, allRowsUrl} from "./datasette"

export const loadData = () => {
  /* Fetch and parse files.*/
  const url = allRowsUrl()
  return datasetteFetch(url)
};
