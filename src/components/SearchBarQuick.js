import React, {useState, useContext} from "react";
import { SearchContext } from "../context/SearchContext";
import { SearchResultsContext } from "../context/SearchResultsContext";

const SearchBarQuick = () => {
  const { addSearchText } = useContext(SearchContext);
  const [text, setText] = useState("");
  const { updateSearchResults } = useContext(SearchResultsContext);

  const handleChange = e => {
    const searchText = e.target.value;
    setText(searchText);
    addSearchText(searchText);
    updateSearchResults(searchText);
  };

  return (
    <p className="control">
      <input
        className="input is-rounded"
        type="text"
        onChange={handleChange}
        value={text}
        placeholder={"Enter name of official, institution, or keyword. Eg. 'thomas wolf'"}
      />
    </p>
  );
};

export default SearchBarQuick;
