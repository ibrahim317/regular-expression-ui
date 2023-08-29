import React from "react";
import Board from "./board/Board.js";
import Rules from "./rules/Rules.js";
import { useSelector } from "react-redux";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const Advanced = () => {
  const allRules = useSelector((state) => state.mainRules);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="innerContainer">
        <div className="fistcolumn">
          <h3>Avaliable Rules</h3>
          <div className="rules-list">
            <Rules rules={allRules} />
          </div>
        </div>
        <div className="spliter"></div>
        <div className="secondcolumn">
          <h3>Rule Expression</h3>
          <Board />
        </div>
      </div>
    </DndProvider>
  );
};

export default Advanced;
