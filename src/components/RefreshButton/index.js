import React from "react";

import "./style.css";

const RefreshButton = ({ onClick, children }) => {
  return (
    <button className="refresh-button" onClick={() => onClick()}>
      {children}
    </button>
  );
};

export default RefreshButton;
