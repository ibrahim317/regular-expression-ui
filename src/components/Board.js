import React from "react";
import Result from "./Result";
import InnerBoard from "./InnerBoard";
const Board = (props) => {
  return (
    <div className="board">
      <Result some={props.some} />
      <InnerBoard addRule={props.addRule} />
    </div>
  );
};

export default Board;
