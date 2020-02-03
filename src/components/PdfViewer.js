import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/entry.parcel";
import { SizeMe } from "react-sizeme";
import PdfViewerPageNav from "./PdfViewerPageNav";
import COSTA from "../data/pdfs/PA-COSTA-JR-JAY.pdf"

const PdfViewer = ({ pdfPath }) => {

  // TODO: Convert to class based component, add _isMounted toggle to prevent attempt to set state
  // when component is unmounted.

  // TODO: replace TEST_PDF_PATH with pdfPath
  const TEST_PDF_PATH = COSTA

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
            <Document file={TEST_PDF_PATH} onLoadSuccess={onDocumentLoadSuccess}>
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
