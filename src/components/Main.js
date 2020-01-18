import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import SearchBar from "./SearchBar"

import {pymSendHeight} from '../utils/handlePym'
import SearchResults from "./SearchResults";

class Main extends React.Component {

  componentDidMount() {
    // This is intended to fix bug where app is clipped at bottom
    // on initial load.
    pymSendHeight({timeout: 500})
    pymSendHeight({timeout: 1000})
  }

  componentDidUpdate() {
    // Because our app changes height based on displayed content, we 
    // update the iframe height after DOM elements have been updated.
    pymSendHeight()
  }

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
