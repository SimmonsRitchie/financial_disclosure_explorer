import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PdfViewer from "./PdfViewer";
import ExtractedText from "./ExtractedText";

const SearchResultsItemInspect = ({item}) => {
  return (
    <div className="results-item-inspect__container">
      <Tabs>
        <TabList>
          <Tab>Extracted text</Tab>
          <Tab>Document</Tab>
        </TabList>

      <TabPanel >
        <ExtractedText item={item}/>
      </TabPanel>

      <TabPanel >
        <PdfViewer pdfPath={item.meta_pdf_path} />
      </TabPanel>

      </Tabs>
    </div>
  );
};

export default SearchResultsItemInspect;
