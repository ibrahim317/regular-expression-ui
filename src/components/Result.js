import React from "react";

const Result = (props) => {
  return (
    <>
      <div className="result">
        <h4>{props.result}</h4>
      </div>
      <hr />
    </>
  );
};

export default Result;
