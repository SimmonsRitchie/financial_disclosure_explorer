import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const SearchResultsItemInspect = () => {
  return (
    <div className="results-item-inspect__container">
      <Tabs>
        <TabList>
          <Tab>Extracted text</Tab>
          <Tab>PDF</Tab>
        </TabList>

      <TabPanel >
        <h2>Extracted text</h2>
      </TabPanel>

      <TabPanel >
        <h2>PDF view!</h2>
      </TabPanel>

      </Tabs>
    </div>
  );
};

export default SearchResultsItemInspect;
