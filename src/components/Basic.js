import React from "react";
import Textarea from "./tools/Textarea";
import DropDown from "./tools/DropDown";
import { Checkbox } from "semantic-ui-react";
const Basic = () => {
  const some = [
    { text: "Start with", value: "Sw" },
    { text: "End with", value: "Ew" },
    { text: "Contains", value: "C" },
  ];
  const num = [
    { text: "1", value: "Sw" },
    { text: "2", value: "Ew" },
    { text: "3", value: "C" },
  ];

  return (
    <div className="outer">
      <h3>Rule Statement</h3>

      <div className="outer">
        <label>Find words that</label>
        <DropDown values={some} />
        <Textarea height="39px" />
        <label className="marginAround">and are within</label>
        <DropDown placeholder="-" search={true} values={num} />
        <label> words of </label>
        <Textarea placeholder="-" />
      </div>
      <div className="BasicBottom">
        <div className="sgroup">
          <Checkbox
            label={<label style={{ color: "#238fcc" }}>Ordered</label>}
          />
          <i
            style={{
              display: "inline-block",
              position: "relative",
              top: "5px",
              marginLeft: "9px",
            }}
            className="gg-info"
          ></i>
        </div>
        <div className="sgroup">
          <label>Exclude Words </label>
          <Checkbox toggle style={{ position: "relative", top: "2px" }} />
        </div>
      </div>
    </div>
  );
};

export default Basic;
