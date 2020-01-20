import React from 'react';

const SearchResultsItem = (props) => {
  const { item } = props
  return ( 
    <div className="box">
      <div>{item.q01_first_name} {item.q01_middle_initial} {item.q01_last_name}</div>
    </div> );
}
 
export default SearchResultsItem;