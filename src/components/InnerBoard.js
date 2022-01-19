import React from "react";
import Rules from "./Rules";
import { useState } from "react";
import { useDrop } from "react-dnd";
import { useEffect } from "react";
const InnerBoard = (props) => {
  let [someClass, setSomeClass] = useState("");
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: "rule",
    drop: (item) => addRuleToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));
  /*Delete rule*/
  const deleteRule = (id) => {
    props.ondelete(id);
    props.setDropRules((dropedRules) => dropedRules.filter((e) => id !== e.id));
  };
  /*Add Rule*/
  const addRuleToBoard = (id) => {
    props.setDropRules((dropedRules) => [...dropedRules, props.addRule(id)]);
  };
  const innerClassf = () => {
    let result = "";
    if (isOver && canDrop) {
      result += " waiting ";
    }

    props.dropedRules.length > 0
      ? (result += " innerBoard ")
      : (result += " emptyBoard ");

    return result;
  };
  useEffect(() => {
    let innerClass = innerClassf();
    setSomeClass(innerClass);
  }, [isOver, canDrop, props.dropedRules]);

  return (
    <div
      ref={drop}
      className={someClass}
      style={isOver && canDrop ? { border: "3px dashed #238fcc" } : {}}
    >
      {props.dropedRules.length > 0 ? (
        <Rules
          deleteRule={deleteRule}
          rules={props.dropedRules}
          droped={true}
        />
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
