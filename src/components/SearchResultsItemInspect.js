import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PdfViewer from "./PdfViewer";
import ExtractedText from "./ExtractedText";

const SearchResultsItemInspect = ({item}) => {
  return (
      <Tabs className="results-item-inspect__container-outer">
        <TabList>
          <Tab>Extracted text</Tab>
          <Tab>Document</Tab>
        </TabList>
      <TabPanel>
        <div className="results-item-inspect__container-inner">
          <ExtractedText item={item}/>
        </div>
      </TabPanel>

      <TabPanel>
        <div className="results-item-inspect__container-inner">
          <PdfViewer pdfPath={item.meta_pdf_path} />
        </div>
      </TabPanel>

      </Tabs>
  );
};

export default SearchResultsItemInspect;
