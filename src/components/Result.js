import { useState } from "react";
import store from "../reducers/store";
const Result = () => {
  const [result, setResult] = useState("");

  store.subscribe(() => {
    const res = store.getState().resultString;
    setResult(res);
  });

  return (
    <>
      <div className="result">
        <h4>{result}</h4>
      </div>
      <hr />
    </>
  );
};

export default Result;
