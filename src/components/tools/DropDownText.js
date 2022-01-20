import React from "react";

const DropDownText = (props) => {
  return (
    <button
      className={props.parentClass}
      style={{
        display: "inline-block",
        color: "#67a5ce",
        marginLeft: "auto",
      }}
    >
      <i className={props.icon} style={{ marginLeft: "5px" }}></i>
      <div className={props.someClass} style={{ display: "none" }}>
        {props.content}
      </div>
    </button>
  );
};

export default DropDownText;
