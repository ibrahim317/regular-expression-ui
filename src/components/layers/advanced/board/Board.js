import React from "react";
import Result from "./Result";
import InnerBoard from "./inner_board/InnerBoard.js";

const Board = () => {
  return (
    <div className="board">
      <Result />
      <InnerBoard />
    </div>
  );
};

export default Board;
