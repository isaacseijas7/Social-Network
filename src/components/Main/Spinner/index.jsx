import React from "react";
import { ImSpinner3 } from "react-icons/im";
import "./MainSpinner.scss";

const MainSpinner = () => {
  return (
    <div className="MainSpinner">
      <ImSpinner3 color="#ffffff" className="spinner" size="30" />
    </div>
  );
};

export default MainSpinner;
