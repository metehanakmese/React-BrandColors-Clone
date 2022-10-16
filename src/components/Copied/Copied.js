import React from "react";
import "./styles.scss";

function Copied({ color }) {
  return (
    <div className="copied">
      Copied <b>{color}</b> to clipboard
    </div>
  );
}

export default Copied;
