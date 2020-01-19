import React from 'react';
import { useSearchContext } from "../context/SearchContext"

const SearchBar = () => {
  const { text, setText } = useSearchContext();

  return (
    <div className="container">
    </div>
  );
};

//<input type="text" onChange={setText} value={text}/>

export default SearchBar