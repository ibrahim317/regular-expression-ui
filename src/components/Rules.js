import React from "react";
import Rule from "./Rule.js";

const Rules = (props) => {
  return props.rules.map((rule) => (
    <Rule
      droped={props.droped}
      deleteRule={props.deleteRule}
      key={rule.id}
      rule={rule}
    />
  ));
};

export default Rules;
