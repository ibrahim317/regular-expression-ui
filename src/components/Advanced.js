import React from "react";
import Board from "./Board.js";
import Rules from "./Rules.js";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const Advanced = () => {
  const some = [
    {
      icon: "i",
      value: "",
      name: "Term",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue et metus ut rutrum. Fusce suscipit nisi et dictum egestas. Aliquam orci neque, rutrum et mattis sed, dapibus eget dolor.r",
      id: 1,
      droped: false,
    },
    {
      icon: "",
      value: "",
      name: "Number",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue et metus ut rutrum. Fusce suscipit nisi et dictum egestas. Aliquam orci neque, rutrum et mattis sed, dapibus eget dolor.e",
      id: 2,
      droped: false,
    },
    {
      value: "",
      icon: "",
      name: "Spacial Character",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue et metus ut rutrum. Fusce suscipit nisi et dictum egestas. Aliquam orci neque, rutrum et mattis sed, dapibus eget dolor.w",
      id: 3,
      droped: false,
    },
    {
      value: "",
      droped: false,
      icon: "",
      name: "Proximity",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue et metus ut rutrum. Fusce suscipit nisi et dictum egestas. Aliquam orci neque, rutrum et mattis sed, dapibus eget dolor.q",
      id: 4,
    },
  ];
  const addRule = (id) => {
    const dropdedRule = some.filter((rule) => rule.id === id);
    return dropdedRule[0];
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="innerContainer">
        <div className="fistcolumn">
          <h3>Avaliable Rules</h3>
          <div className="rules-list">
            <Rules rules={some} />
          </div>
        </div>
        <div className="spliter"></div>
        <div className="secondcolumn">
          <h3>Rule Expression</h3>
          <Board some={some} addRule={addRule} />
        </div>
      </div>
    </DndProvider>
  );
};

export default Advanced;
