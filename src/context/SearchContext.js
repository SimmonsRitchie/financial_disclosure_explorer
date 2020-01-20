import React, { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchContextProvider = props => {
  const [searchText, setSearchText] = useState("")

  const addSearchText = (text) => {
    setSearchText(text)
  }
  return (
  <SearchContext.Provider value={{searchText, addSearchText}}>
    {props.children}
  </SearchContext.Provider>);
};

export default SearchContextProvider;
