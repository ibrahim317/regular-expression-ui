import React from "react";
import Result from "./Result";
import InnerBoard from "./InnerBoard";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
const Board = (props) => {
  const [dropedRules, setDropRules] = useState([]);
  const [result, setResult] = useState("");
  const [bool, setBool] = useState(false);
  useEffect(() => {
    setBool(!bool);
  }, [dropedRules]);
  const outResult = () => {
    setResult("");
    dropedRules.forEach((e) => {
      if (e.droped === true) {
        setResult(result + e.value);
      }
    });
  };
  useEffect(() => {
    outResult("");
  }, [dropedRules]);
  return (
    <div className="board">
      <Result result={result} />
      <InnerBoard
        ondelete={props.ondelete}
        addRule={props.addRule}
        dropedRules={dropedRules}
        setDropRules={setDropRules}
      />
    </div>
  );
};

export default Board;
