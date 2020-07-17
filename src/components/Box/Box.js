import React from "react";
import "./Box.css";
const Box = ({ idx }) => {
  return <div class="box" id={idx} style={{ height: `${idx * 20}px` }}></div>;
};

export default Box;
