/* Footer: insert credit, footnotes and data source.

Note: The logo can look awkward depending on the footnote text (especially if it wraps).
You may need to adjust the css to hide the spotlight logo for smaller screen widths or
simply remove it entirely.
*/

import React from "react";

const Footer = () => {
  const spotlightUrl = "https://www.spotlightpa.org/";
  const templeUrl = "http://temple.edu/"
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          Pa. Financial Disclosure Explorer was produced by{" "}
          <a href={spotlightUrl}>Spotlight PA</a> and <a href={templeUrl}>Temple University</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
