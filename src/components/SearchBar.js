import React, {useState, useContext} from 'react';
import { SearchContext } from "../context/SearchContext"
import { SearchResultsContext } from "../context/SearchResultsContext";


const SearchBar = (props) => {
  const {addSearchText} = useContext(SearchContext)
  const [text, setText] = useState("")
  const { updateSearchResults } = useContext(SearchResultsContext);

  const handleChange = (e) => {
    const searchText = e.target.value
    setText(searchText)
    addSearchText(searchText)
    updateSearchResults(searchText)
  }

  return (
      <div className="level">
        <input className="input is-rounded" type="text" onChange={handleChange} value={text} placeholder={"Search for lawmaker, institution, or keyword"}/>
      </div>
  );
};

export default SearchBar