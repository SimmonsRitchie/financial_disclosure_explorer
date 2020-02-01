import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const SearchBarAdvancedFilter = ({
  searchFilter,
  handleInputChange,
  removeFilter,
  disableRemove
}) => {
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
              <option value="filingYear">Filing year</option>
              <option value="filerName">Filer's name</option>
              <option value="filerPosition">Filer's position</option>
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

        <p className="control is-expanded ">
          <input
            data-id={searchFilter.id}
            name="keywords"
            className="input is-rounded"
            type="text"
            onChange={handleInputChange}
            value={searchFilter.keywords}
            placeholder={"Enter keywords"}
          />
        </p>

        <div className="control">
          <button
            disabled={disableRemove}
            className="button has-text-danger	is-white"
            onClick={() => removeFilter(searchFilter.id)}
          >
          <FontAwesomeIcon icon={faTimes} size="lg"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBarAdvancedFilter;
