import React from "react";

const DropDownText = (props) => {
  return (
    <div
      className="dropDown"
      style={{
        cursor: "pointer",
        display: "inline-block",
        color: "#67a5ce",
        marginLeft: "auto",
      }}
    >
      <i className={props.icon}></i>
      <div className={props.someClass} style={{ display: "none" }}>
        {props.content}
      </div>
    </div>
  );
};

export default DropDownText;
