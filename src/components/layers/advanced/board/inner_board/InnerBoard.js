import React from "react";
import Rules from "../../rules/Rules.js";
import remove from "../../../../../actions/remove";
import addRuleToUI from "../../../../../actions/addRuleToUI";
import BoardText from "../../../../tools/Empty";
import { useState } from "react";
import { useDrop } from "react-dnd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const InnerBoard = () => {
  const [test, setTest] = useState("");
  const [someClass, setSomeClass] = useState("");
  const dropdedRulesList = useSelector((state) => state.dropedRules);
  const dispatch = useDispatch();

  /*Add Rule*/

  const addRuleToBoard = (rule) => {
    dispatch(addRuleToUI(rule));
  };

  /*Delete rule*/
  const deleteRule = (id) => {
    dispatch(remove(id));
    setTest((local) => local + "a");
  };

  /* Handle droping items on the innerBoard  */
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: "rule",
    drop: (item) => {
      return addRuleToBoard(item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  const innerClassf = () => {
    let result = "";
    if (isOver && canDrop) {
      result += " waiting ";
    }

    dropdedRulesList.length > 0
      ? (result += " innerBoard ")
      : (result += " emptyBoard ");

    return result;
  };
  useEffect(() => {
    const innerClass = innerClassf();
    setSomeClass(innerClass);
  }, [isOver, canDrop, dropdedRulesList]);

  return (
    <div
      ref={drop}
      className={someClass}
      style={isOver && canDrop ? { border: "3px dashed #238fcc" } : {}}
    >
      {dropdedRulesList.length > 0 ? (
        <Rules rules={dropdedRulesList} deleteRule={deleteRule} droped={true} />
      ) : (
        <BoardText />
      )}
    </div>
  );
};

export default InnerBoard;
