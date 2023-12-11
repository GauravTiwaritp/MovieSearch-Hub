import React from "react";
import "./style.scss";
const ContentWrapper = ({ children }) => {
  return (
    <>
      <div className="contentwrapper">{children}</div>
    </>
  );
};

export default ContentWrapper;
