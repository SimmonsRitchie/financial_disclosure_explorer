import React, {useState, useContext} from 'react';
import { SearchContext } from "../context/SearchContext"

const SearchBar = () => {
  const {addSearchText} = useContext(SearchContext)
  const [text, setText] = useState("")

  const handleChange = (e) => {
    setText(e.target.value)
    addSearchText(e.target.value)
  }

  return (
      <div className="level">
        <input className="input" type="text" onChange={handleChange} value={text} placeholder={"Search for lawmaker, institution, or keyword"}/>
      </div>
  );
};

export default SearchBar