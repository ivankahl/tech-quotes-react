import React from "react";

import "./style.css";

const Quote = ({ quote, author }) => {
  return (
    <div className="quote-container">
      <div className="quote">{quote}</div>
      <div className="author">{author}</div>
    </div>
  );
};

export default Quote;
