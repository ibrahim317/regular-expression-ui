import Header from "./Header.js";
import { useState } from "react";
import Basic from "./Basic.js";
import Advanced from "./Advanced.js";

const MainBorder = (props) => {
  const [isBasic, setIsBasic] = useState(false);
  const basicChecked = () => {
    setIsBasic(true);
  };
  const advancedChecked = () => {
    setIsBasic(false);
  };
  return (
    <div className="container">
      <Header
        onBasic={basicChecked}
        onAdvance={advancedChecked}
        Checked={isBasic}
      />

      {isBasic ? (
        <>
          <hr /> <Basic />
        </>
      ) : (
        <Advanced />
      )}
    </div>
  );
};

export default MainBorder;
