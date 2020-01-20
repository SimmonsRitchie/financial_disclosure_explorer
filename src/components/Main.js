import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import SearchContextProvider, { SearchContext } from "../context/SearchContext";

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <SearchContextProvider>
          <Body>
            <SearchBar />
            <SearchResults data={this.props.data}/>
          </Body>
        </SearchContextProvider>
        <Footer />
      </div>
    );
  }
}

export default Main;
