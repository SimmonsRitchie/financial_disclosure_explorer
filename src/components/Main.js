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
      <div className="main__container">
        <Header />
        <div className="main__content">
          <SearchContextProvider>
            <SearchResultsContextProvider data={this.props.data}>
              <Body className="container">
                <SearchBar />
                <SearchResults />
              </Body>
            </SearchResultsContextProvider>
          </SearchContextProvider>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
