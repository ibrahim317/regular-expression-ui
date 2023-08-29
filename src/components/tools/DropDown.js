import 'semantic-ui-css/semantic.min.css';
import React from "react";
import { Dropdown } from "semantic-ui-react";
const DropDown = (props) => {
  return props.search ? (
    <Dropdown
      inline
      placeholder={props.placeholder}
      search
      selection
      options={props.values}
      defaultValue={props.values[0].value}
    />
  ) : (
    <Dropdown
      inline
      placeholder={props.placeholder}
      selection
      options={props.values}
      defaultValue={props.values[0].value}
    />
  );
};
DropDown.defaultProps = {
  values: [{}, {}],
  search: false,
};
export default DropDown;
