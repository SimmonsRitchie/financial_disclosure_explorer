import { json } from "d3-fetch";
import {DATA} from "~/data/dummy-data.js";
import {datasetteFetch} from "./datasette"

export const loadData = () => {
  /* Fetch and parse files.*/
  const allDataUrl = "https://sfi-explorer.herokuapp.com/sfi/extracted.json?_shape=array"
  return datasetteFetch(allDataUrl)
};
