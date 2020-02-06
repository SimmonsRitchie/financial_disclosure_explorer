import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { SEARCH_FIELDS } from "../config/fields";
import { SearchResultsContext } from "../context/SearchResultsContext";

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
        <p className="control is-expanded">
          <span className="select is-fullwidth">
            <select
              data-id={searchFilter.id}
              value={searchFilter.field}
              name="field"
              onChange={handleInputChange}
            >
              {SEARCH_FIELDS.map(item => (
                <option key={item.value} value={item.value}>
                  {item.display_name}
                </option>
              ))}
            </select>
          </span>
        </p>

        <p className="control is-expanded">
          <span className="select is-fullwidth">
            <select
              value={searchFilter.condition}
              data-id={searchFilter.id}
              name="condition"
              onChange={handleInputChange}
            >
              <option value="contains">Contains</option>
              <option value="starts_with">Starts with</option>
              <option value="ends_with">Ends with</option>
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

const DynamicInput = props => {
  const { inputType, searchFilter, handleInputChange } = props;

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

  let desiredInput = textInput;

  if (inputType === "text") {
    desiredInput = textInput;
  } else if (inputType === "select") {
    desiredInput = <SelectInput {...props} />;
  }

  return <p className="control is-expanded">{desiredInput}</p>;
};

const SelectInput = ({ handleInputChange, searchFilter }) => {
  const { getUniqueFieldVals } = useContext(SearchResultsContext);
  const uniqueVals = getUniqueFieldVals(searchFilter.field);

  return (
      <span className="select is-fullwidth">
        <select
          data-id={searchFilter.id}
          name="keywords"
          className="input"
          onChange={handleInputChange}
          value={searchFilter.keywords}
        >
          {uniqueVals.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </span>
  );
};

export default SearchBarAdvancedFilter;
