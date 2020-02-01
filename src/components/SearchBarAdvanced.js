import React, { useState, useContext } from "react";
import { SearchResultsContext } from "../context/SearchResultsContext";
import SearchBarAdvancedFilter from "./SearchBarAdvancedFilter";
import uuid from 'uuid/v1'

const DEFAULT_SEARCH_FILTER = {field: 'filerPosition', condition: 'excludes', keywords:''}
const MAX_FILTERS = 5

const SearchBarAdvanced = () => {
  const { updateSearchResultsAdvanced } = useContext(SearchResultsContext);
  const [searchFilters, setSearchFilters] = useState([
    {...DEFAULT_SEARCH_FILTER, id: uuid()},
  ])

  const handleInputChange = (e) => {
    const filterId = event.target.dataset.id
    const name = e.target.name
    const value = e.target.value
    // get index from array based on ID
    const objIndex = searchFilters.findIndex(obj => obj.id === filterId);
    // create new obj
    const updatedObj = { ...searchFilters[objIndex], [name]: value};
    // make new array of objects including updated obj
    const updatedArray = [
      ...searchFilters.slice(0, objIndex),
      updatedObj,
      ...searchFilters.slice(objIndex + 1),
    ];
    setSearchFilters(updatedArray)
    updateSearchResultsAdvanced(updatedArray)
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
