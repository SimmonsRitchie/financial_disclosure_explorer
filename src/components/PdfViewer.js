import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/entry.parcel";
import { SizeMe } from "react-sizeme";
import PdfViewerPageNav from "./PdfViewerPageNav";
import COSTA from "../data/pdfs/PA-COSTA-JR-JAY.pdf";

const PdfViewer = ({ pdfPath }) => {
  // Use testing pdf in development to avoid CORS issues
  let displayPdf
  if (process.env.NODE_ENV === "development") {
    console.log("dev mode: using testing PDF path");
    displayPdf = COSTA;
  } else {
    displayPdf = pdfPath;
  }

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loadSucess, setLoadSuccess] = useState(false);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoadSuccess(true);
  };

  const previousPage = () => setPageNumber(pageNumber - 1);

  const nextPage = () => setPageNumber(pageNumber + 1);

  return (
    <div className="pdf-viewer__container">
      {loadSucess && (
        <PdfViewerPageNav
          pageNumber={pageNumber}
          numPages={numPages}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      )}
      <SizeMe
        monitorHeight
        refreshRate={128}
        refreshMode={"debounce"}
        render={({ size }) => (
          <div>
            <Document file={displayPdf} onLoadSuccess={onDocumentLoadSuccess}>
              <Page
                className={"pdf-viewer__document"}
                pageNumber={pageNumber}
                width={size.width - 2}
              />
            </Document>
          </div>
        )}
      />
      {loadSucess && (
        <PdfViewerPageNav
          pageNumber={pageNumber}
          numPages={numPages}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      )}
    </div>
  );
};

export default PdfViewer;
