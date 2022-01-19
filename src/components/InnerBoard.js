import React from "react";
import Rules from "./Rules";
import { useState } from "react";
import { useDrop } from "react-dnd";
import { useEffect } from "react";
const InnerBoard = (props) => {
  const [dropedRules, setDropRules] = useState([]);
  let [someClass, setSomeClass] = useState("");
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: "rule",
    drop: (item) => addRuleToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));
  const deleteRule = (id) => {
    setDropRules((dropedRules) => dropedRules.filter((e) => e.id === id));
  };
  const addRuleToBoard = (id) => {
    setDropRules((dropedRules) => [...dropedRules, props.addRule(id)]);
  };
  const innerClassf = () => {
    let result = "";
    if (!isOver && canDrop) {
      result += " waiting ";
    }

    dropedRules.length > 0
      ? (result += " innerBoard ")
      : (result += " emptyBoard ");

    return result;
  };
  useEffect(() => {
    let innerClass = innerClassf();
    setSomeClass(innerClass);
  }, [isOver, canDrop, dropedRules]);

  return (
    <div
      ref={drop}
      className={someClass}
      style={isOver && canDrop ? { border: "3px dashed #238fcc" } : {}}
    >
      {dropedRules.length > 0 ? (
        <Rules deleteRule={deleteRule} rules={dropedRules} droped={true} />
      ) : (
        <>
          <h2 style={{ display: "block " }}>Add Rule</h2>
          <p>
            <strong>Drag & Drop </strong> a rule from the avaliable rules area
            to start defining your advance rule
          </p>
        </>
      )}
    </div>
  );
};

export default InnerBoard;
