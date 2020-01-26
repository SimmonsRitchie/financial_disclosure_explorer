import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


const PdfViewerPageNav = ({ pageNumber, numPages, previousPage, nextPage }) => {
  const leftArrow = <FontAwesomeIcon icon={faChevronLeft} size="2x"/>
  const rightArrow = <FontAwesomeIcon icon={faChevronRight} size="2x"/>
  return (
    <div className={"pdf-page-nav__container"}>
      <button className={"pdf-page-nav__arrow"} type="button" disabled={pageNumber <= 1} onClick={previousPage}>
      {leftArrow}
      </button>
      <p>
        Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
      </p>
      <button
        className={"pdf-page-nav__arrow"}
        type="button"
        disabled={pageNumber >= numPages}
        onClick={nextPage}
      >
      {rightArrow}
      </button>
    </div>
  );
};

export default PdfViewerPageNav