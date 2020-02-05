import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/entry.parcel";
import { SizeMe } from "react-sizeme";
import PdfViewerPageNav from "./PdfViewerPageNav";
import COSTA from "../data/pdfs/PA-COSTA-JR-JAY.pdf";
import { faExpand, faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PdfViewer = ({ pdfPath }) => {
  // Use testing pdf in development to avoid CORS issues
  let displayPdf;
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
        <div className="pdf-viewer__container-header">
          <PdfViewerPageNav
            pageNumber={pageNumber}
            numPages={numPages}
            previousPage={previousPage}
            nextPage={nextPage}
          />
        </div>
      )}
      <SizeMe
        monitorHeight
        refreshRate={128}
        refreshMode={"debounce"}
        render={({ size }) => (
          <div className="pdf-viewer__document-container">
            <PdfOverlay pdfPath={pdfPath} size={size}>
              <Document file={displayPdf} onLoadSuccess={onDocumentLoadSuccess}>
                <Page
                  className={"pdf-viewer__page"}
                  pageNumber={pageNumber}
                  width={size.width - 2}
                />
              </Document>
            </PdfOverlay>
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

const PdfOverlay = ({ pdfPath, size, ...props }) => {
  let iconSize;
  if (size.width < 700) {
    iconSize = 3;
  } else {
    iconSize = 4;
  }
  return (
    <div className="pdf-viewer__pdf-overlay-container">
      <a
        href={pdfPath}
        target="_blank"
        className="pdf-viewer__pdf-overlay-icon"
      >
        <FontAwesomeIcon icon={faExpand} size={`${iconSize}x`} />
      </a>
      {props.children}
    </div>
  );
};

export default PdfViewer;
