import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults";
import { useCounterContext } from "../context/CounterContext"
import CounterDisplay from "./CounterDisplay";
import CounterButtons from "./CounterButtons";

class Main extends React.Component {

  render() {
    return (
        <useCounterContext.Provider>
          <div className="container">
            <Header />
              <Body>
                <SearchBar />
                <SearchResults />
                <CounterDisplay />
                <CounterButtons />
              </Body>
            <Footer />
          </div>
        </useCounterContext.Provider>
    );
  }
}

export default Main;
