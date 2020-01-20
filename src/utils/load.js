import { json } from "d3-fetch";
import {DATA} from "~/data/dummy-data.js";

export const loadData = () => {
  /* Fetch and parse files.*/
  return Promise.all([
    DATA,
  ]).then(DATA => {
    console.log(DATA)
    return DATA[0]
  })
};
