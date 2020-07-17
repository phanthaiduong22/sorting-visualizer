import React from "react";
import Box from "../Box/Box";
import "./Boxes.css";

const Boxes = ({ arr }) => {
  const listBoxes = arr.map((number) => <Box idx={number} />);
  return <div class="boxes">{listBoxes}</div>;
};

export default Boxes;
