import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/entry.parcel";
import { SizeMe } from "react-sizeme";

const PdfViewer = ({ pdfPath }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loadSucess, setLoadSuccess] = useState(false);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoadSuccess(true);
  };

  const previousPage = () => setPageNumber(pageNumber - 1);

  const nextPage = () => setPageNumber(pageNumber + 1);
  //TODO: Add React SizeMe to resize pdf

  return (
    <div className="pdf-viewer__container">
      {loadSucess && (
        <PdfPageNav
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
            <Document
              file={pdfPath}
              onLoadSuccess={onDocumentLoadSuccess}
            >
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
        <PdfPageNav
          pageNumber={pageNumber}
          numPages={numPages}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      )}
    </div>
  );
};

const PdfPageNav = ({ pageNumber, numPages, previousPage, nextPage }) => {
  return (
    <div className={"pdf-viewer__page-nav-container"}>
      <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
        Previous
      </button>
      <p>
        Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
      </p>
      <button
        type="button"
        disabled={pageNumber >= numPages}
        onClick={nextPage}
      >
        Next
      </button>
    </div>
  );
};

export default PdfViewer;
