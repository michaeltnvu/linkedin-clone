import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import InfoIcon from "@mui/icons-material/Info";
import React from "react";
import "./Widgets.css";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "Michael is a Software Engineer",
        "Top News - 194,023 readers"
      )}
      {newsArticle("Coronavirus: USA updates", "Top News - 264 readers")}
      {newsArticle("Tesla Hits New Highs", "Top News - 202 readers")}
      {newsArticle("Is Redux Too Good?", "Code - 619 readers")}
      {newsArticle("Bitcoin Breaks $22k", "Crypto - 543 readers")}
    </div>
  );
}

export default Widgets;
