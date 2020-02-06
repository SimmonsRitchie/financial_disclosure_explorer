import React, { useState, useContext } from "react";
import { SearchResultsContext } from "../context/SearchResultsContext";
import SearchBarAdvancedFilter from "./SearchBarAdvancedFilter";
import uuid from 'uuid/v1'
import {SEARCH_FIELDS} from "../config/fields"

const DEFAULT_SEARCH_FILTER = {field: SEARCH_FIELDS[0].value, condition: 'contains', keywords:'', inputType: SEARCH_FIELDS[0].inputType}
// TODO: Maybe add inputType here to search filter fields.
const MAX_FILTERS = 5

const SearchBarAdvanced = () => {
  const { handleAdvancedSearch } = useContext(SearchResultsContext);
  const [searchFilters, setSearchFilters] = useState([
    {...DEFAULT_SEARCH_FILTER, id: uuid()},
  ])

  const handleInputChange = (e) => {
    const value = e.target.value
    
    // CHANGE INPUT TYPE IF FIELD CHANGES
    // Certain field types use select inputs rather than text inputs
    let inputType = ""
    if (e.target.name === 'field') {
      const searchFieldItem = SEARCH_FIELDS.filter(
        item => item.value === value
      )[0];
      inputType = searchFieldItem.inputType
    }
    // UPDATE ARRAY
    const filterId = event.target.dataset.id
    const name = e.target.name
    // get index from array based on ID
    const objIndex = searchFilters.findIndex(obj => obj.id === filterId);
    // create new obj
    let updatedObj = { ...searchFilters[objIndex], [name]: value};
    // if field has changed, then update inputType in object and clear keywords
    if (e.target.name === 'field') {
      updatedObj = {...updatedObj, inputType, keywords: ""}
    }
    // make new array of objects including updated obj
    const updatedArray = [
      ...searchFilters.slice(0, objIndex),
      updatedObj,
      ...searchFilters.slice(objIndex + 1),
    ];
    setSearchFilters(updatedArray)
    handleAdvancedSearch(updatedArray)
  }

  const addFilter = () => {
    const newArray = [...searchFilters, {...DEFAULT_SEARCH_FILTER, id: uuid()}]
    setSearchFilters(newArray)
  }

  const removeFilter = (id) => {
    setSearchFilters(searchFilters.filter(filter => filter.id !== id))
  }

  const disableRemove = searchFilters.length < 2
  const disableAddFilter = searchFilters.length >= MAX_FILTERS

  return (
    <div>
      <div className="searchbar__advanced">
      {searchFilters.map(searchFilter => {
        return <SearchBarAdvancedFilter handleInputChange={handleInputChange} searchFilter={searchFilter} removeFilter={removeFilter} key={searchFilter.id} disableRemove={disableRemove}/>
      })}
      </div>
      <div className="buttons is-centered">
        <button disabled={disableAddFilter} className="button" onClick={addFilter}>Add filter</button>
      </div>
      {disableAddFilter && <p className="has-text-centered is-size-7 has-text-danger">*Maximum of {MAX_FILTERS} filters</p>}
    </div>
  );
};

export default SearchBarAdvanced;
