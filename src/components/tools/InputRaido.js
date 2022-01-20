import React from "react";

const InputRaido = (props) => {
  const divstyling = {
    display: "inline-block",
    margin: "15px",
  };
  const radioStyling = {
    transform: "scale(1.5)",
    margin: "10px",
  };
  return (
    <div style={divstyling}>
      <label>
        <input
          style={radioStyling}
          type="radio"
          className="io"
          checked={props.Checked}
          onChange={props.onBasic}
          name="radio"
        ></input>
        {props.name}
      </label>
    </div>
  );
};

export default InputRaido;
