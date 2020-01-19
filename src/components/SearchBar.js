import React, {useState} from 'react';

const SearchBar = () => {
  const [text, setText] = useState("")

  return (
    <div className="container">
    <form>
      <input type="text" onChange={(e) => setText(e.target.value) } value={text}/>
    </form>
    </div>
  );
};

//<input type="text" onChange={setText} value={text}/>

export default SearchBar