import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/entry.parcel";
import { SizeMe } from "react-sizeme";

const PdfViewer = ({ pdfPath }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const previousPage = () => setPageNumber(pageNumber - 1);

  const nextPage = () => setPageNumber(pageNumber + 1);
  //TODO: Add React SizeMe to resize pdf

  return (
    <div>
      <SizeMe
        monitorHeight
        refreshRate={128}
        refreshMode={"debounce"}
        render={({ size }) => (
          <div>
            <Document
              file={pdfPath}
              onLoadSuccess={onDocumentLoadSuccess}
              className="pdf-viewer__document"
            >
              <Page
                className={"pdf-viewer__document"}
                pageNumber={pageNumber}
                width={size.width}
              />
            </Document>
          </div>
        )}
      />
      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PdfViewer;
