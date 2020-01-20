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
    <div className="container">
    <input type="text" onChange={handleChange} value={text}/>
    </div>
  );
};

//<input type="text" onChange={setText} value={text}/>

export default SearchBar