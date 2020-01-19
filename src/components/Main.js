import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults";
// import { useCounterContext } from "../context/CounterContext"
import { useSearchContext } from "../context/searchContext"
import CounterDisplay from "./CounterDisplay";
import CounterButtons from "./CounterButtons";

class Main extends React.Component {

  render() {
    return (
          <div className="container">
          <useSearchContext.Provider>

            <Header />
              <Body>
                <SearchBar />
                <SearchResults />
              </Body>
            <Footer />
            </useSearchContext.Provider>

          </div>
    );
  }
}

export default Main;
