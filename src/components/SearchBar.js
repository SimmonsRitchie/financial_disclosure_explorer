import React, { useState, useContext } from "react";

import SearchBarQuick from "./SearchBarQuick";
import SearchBarAdvanced from "./SearchBarAdvanced";

const SearchBar = (props) => {
  const [searchType, setSearchType] = useState('quick')
  const SearchBarType = searchType === 'quick' ? 
    <SearchBarQuick/> : 
    <SearchBarAdvanced/>


  const handleSearchType = (searchType) => {
    if (searchType == 'quick') {
        setSearchType('quick')
    } else if (searchType == 'advanced') {
      setSearchType('advanced')
    }
  }

  return (
    <div className="section">
      <div className="container">
        <div className="tabs is-centered is-toggle is-small" >
          <ul>
            <li className={searchType === 'quick' ? "is-active" : ""} onClick={() => handleSearchType('quick')}>
              <a>Quick search</a>
            </li>
            <li className={searchType === 'advanced' ? "is-active" : ""} onClick={() => handleSearchType('advanced')}>
              <a>Advanced search</a>
            </li>
          </ul>
        </div>
        <div>
          {SearchBarType}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
