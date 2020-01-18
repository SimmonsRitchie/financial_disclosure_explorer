import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import SearchBar from "./SearchBar"

import SearchResults from "./SearchResults";

class Main extends React.Component {

  render() {
    return (
        <div className="container">
          <Header />
            <Body>
              <SearchBar />
              <SearchResults />
            </Body>
          <Footer />
        </div>
    );
  }
}

export default Main;
