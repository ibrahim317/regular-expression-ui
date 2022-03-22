import InputRaido from "./tools/InputRaido";
import Textarea from "./tools/Textarea";

const Header = (props) => {
  return (
    <div className="header">
      <h3>Create Rule for "{props.CategoryName}" Category </h3>
      <Textarea placeholder="Billing_Accuarcy" name="Rule Name" width="250px" />
      <div style={{ display: "inline-block" }}>
        <InputRaido
          name=" Basic"
          Checked={props.Checked}
          onBasic={props.onBasic}
        />
        <InputRaido
          name=" Advanced"
          Checked={!props.Checked}
          onBasic={props.onAdvance}
        />
      </div>
      <hr />
    </div>
  );
};
Header.defaultProps = {
  CategoryName: "Train",
};

export default Header;
