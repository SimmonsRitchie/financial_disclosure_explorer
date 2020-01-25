import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import SearchContextProvider, { SearchContext } from "../context/SearchContext";
import SearchResultsContextProvider from "../context/SearchResultsContext";

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <SearchContextProvider>
          <SearchResultsContextProvider data={this.props.data}>
            <Body>
              <SearchBar />
              <SearchResults />
            </Body>
          </SearchResultsContextProvider>
        </SearchContextProvider>
        <Footer />
      </div>
    );
  }
}

export default Main;
