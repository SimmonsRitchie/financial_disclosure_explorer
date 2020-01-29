import React, { useState, useContext } from "react";

import SearchBarQuick from "./SearchBarQuick";
import SearchBarAdvanced from "./SearchBarAdvanced";

const SearchBar = props => {
  const [searchType, setSearchType] = useState("quick");
  const SearchBarType =
    searchType === "quick" ? <SearchBarQuick /> : <SearchBarAdvanced />;

  const handleSearchType = searchType => {
    if (searchType == "quick") {
      setSearchType("quick");
    } else if (searchType == "advanced") {
      setSearchType("advanced");
    }
  };

  return (
    <div className="section">
      <div className="container">
        <div className="searchbar__option-container">
          <a
            className={
              searchType == "quick"
                ? "searchbar__option-active"
                : "searchbar__option"
            }
            onClick={() => handleSearchType("quick")}
          >
            Quick Search
          </a>
          <a
            className={
              searchType == "advanced"
                ? "searchbar__option-active"
                : "searchbar__option"
            }
            onClick={() => handleSearchType("advanced")}
          >
            Advanced Search
          </a>
        </div>
        <div>{SearchBarType}</div>
      </div>
    </div>
  );
};

export default SearchBar;