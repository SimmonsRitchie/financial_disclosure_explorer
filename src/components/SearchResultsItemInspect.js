import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PdfViewer from "./PdfViewer";

const SearchResultsItemInspect = ({item}) => {
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
        <PdfViewer pdfPath={item.meta_pdf_path} />
      </TabPanel>

      </Tabs>
    </div>
  );
};

export default SearchResultsItemInspect;
