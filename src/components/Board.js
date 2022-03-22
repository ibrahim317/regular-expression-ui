import React from "react";
import Result from "./Result";
import InnerBoard from "./InnerBoard";
import { useState } from "react";
import { useEffect } from "react";

const Board = (props) => {
  const [dropedRules, setDropRules] = useState([]);
  let [result, setResult] = useState("");
  const outResult = () => {
    let tmpResult = "";
    result = "";
    dropedRules.forEach((e) => {
      if (e.droped === true) {
        tmpResult += e.value;
      }
      setResult(tmpResult);
    });
  };
  useEffect(() => {
    outResult();
  }, [dropedRules]);
  return (
    <div className="board">
      <Result result={result} />
      <InnerBoard
        ondelete={props.deleteRule}
        addRule={props.addRule}
        dropedRules={dropedRules}
        setDropRules={setDropRules}
        some={props.some}
      />
    </div>
  );
};

export default Board;
