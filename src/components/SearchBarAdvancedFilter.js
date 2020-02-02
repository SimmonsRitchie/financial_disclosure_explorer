import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { SEARCH_FIELDS } from "../config/searchSettings";

const SearchBarAdvancedFilter = props => {
  const {
    searchFilter,
    handleInputChange,
    removeFilter,
    disableRemove
  } = props;

  return (
    <div className="searchbar__advanced-filter-container">
      <div className="field is-grouped is-grouped-multiline is-grouped-centered">
        <p className="control">
          <span className="select">
            <select
              data-id={searchFilter.id}
              value={searchFilter.field}
              name="field"
              onChange={handleInputChange}
            >
              {SEARCH_FIELDS.map(item => (
                <option key={item.value} value={item.value}>
                  {item.display}
                </option>
              ))}
            </select>
          </span>
        </p>

        <p className="control">
          <span className="select">
            <select
              value={searchFilter.condition}
              data-id={searchFilter.id}
              name="condition"
              onChange={handleInputChange}
            >
              <option value="contains">Contains</option>
              <option value="excludes">Excludes</option>
            </select>
          </span>
        </p>

        <DynamicInput inputType={searchFilter.inputType} {...props} />

        <div className="control">
          <button
            disabled={disableRemove}
            className="button has-text-danger	is-white"
            onClick={() => removeFilter(searchFilter.id)}
          >
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

const DynamicInput = ({ inputType, searchFilter, handleInputChange }) => {
  const textInput = (
    <input
      data-id={searchFilter.id}
      name="keywords"
      className="input is-rounded"
      type="text"
      onChange={handleInputChange}
      value={searchFilter.keywords}
      placeholder={"Enter keywords"}
    />
  );

  const selectInput = (
    <select
      data-id={searchFilter.id}
      name="keywords"
      className="input"
      onChange={handleInputChange}
      value={searchFilter.keywords}
    >
      <option value="test">Test</option>
    </select>
  );
  let desiredInput = textInput;

  if (inputType === "text") {
    desiredInput = textInput;
  } else if (inputType === "select") {
    desiredInput = selectInput;
  }

  return <p className="control is-expanded ">{desiredInput}</p>;
};

export default SearchBarAdvancedFilter;
