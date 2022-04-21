import React from "react";
import Result from "./Result";
import InnerBoard from "./InnerBoard";

const Board = () => {
  return (
    <div className="board">
      <Result />
      <InnerBoard />
    </div>
  );
};

export default Board;
