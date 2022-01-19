import React from "react";

const Textarea = (props) => {
  const groupStyling = {
    width: `${props.width}`,
    display: "inline-block",
    position: "relative",
    top: "2px",
    left: "4px",
    height: `${props.height}`,
  };
  return (
    <div className="inputarea" style={groupStyling}>
      {props.name !== "" ? (
        <>
          <label>{props.name}</label>
          <input
            type="text"
            style={{ left: "-50px", width: `${props.width}` }}
            placeholder={props.placeholder}
          />
        </>
      ) : (
        <>
          <input
            style={{ width: `${props.width}` }}
            type="text"
            placeholder={props.placeholder}
          />
        </>
      )}
    </div>
  );
};
Textarea.defaultProps = {
  placeholder: "",
  name: "",
};
export default Textarea;
