/* Defines what fields in our data can be searched and how they can be searched*/

import FIELDS from "./fields.json"

export const DISPLAY_FIELDS = FIELDS.filter(field => field.display);

export const SEARCH_FIELDS = FIELDS.filter(field => field.search);
